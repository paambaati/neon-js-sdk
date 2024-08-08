import type { API, FileInfo, ASTPath, MethodDefinition, Property, ClassMethod } from 'jscodeshift';

/**
 * This transformer applies 2 fixes to the generated code to make it publish-able to JSR.
 * 1. It adds an explicit `string` type annotation to getters that are missing a return type.
 * 2. It replaces backticks in strings with quotes (this is due to a currently open bug on JSR/Deno).
 * @see https://github.com/jsr-io/jsr/issues/453
 * @see https://jsr.io/docs/about-slow-types
 *
 * Note that this can be removed once the above linked issue is fixed.
 */
export default function transformer(file: FileInfo, api: API) {
    const j = api.jscodeshift;
    const root = j(file.source);

    function addOrAppendComment(commentText: string) {
        const firstNode = root.find(j.Program).get('body', 0).node;
        const comments = firstNode.comments || [];

        if (comments.length > 0 && comments[0].type === 'CommentBlock') {
            // NOTE: If there's already a block comment, append to it.
            comments[0].value += `\n * ${commentText}`;
        } else if (comments.length > 0 && comments[0].type === 'CommentLine') {
            // NOTE: If there's already a line comment, convert it to a block comment and append
            const existingComment = comments[0].value.trim();
            comments[0] = j.commentBlock(
                `*\n * ${existingComment}\n * ${commentText}\n `
            );
        } else {
            // NOTE: Otherwise, add a new block comment at the top
            comments.unshift(j.commentBlock(`*\n * ${commentText}\n `));
        }
        firstNode.comments = comments;
    }

    addOrAppendComment('This file was modified by a custom transform to make it ready to publish to JSR - see https://github.com/paambaati/neon-js-sdk/blob/main/scripts/transformers/jsr-fixes.ts');

    function processString(inputString: string): string {
        // NOTE: Replace escaped backticks with escaped double quotes.
        inputString = inputString.replace(/\\`/g, '"');
        // NOTE: Remove trailing new lines. 
        inputString = inputString.replace(/\n$/, "");
        return inputString;
    }

    function addStringReturnType(path: ASTPath<MethodDefinition | Property | ClassMethod>): void {
        const method = path.node;
        if ('value' in method && method.value.type === 'FunctionExpression' && !method.value.returnType) {
            method.value.returnType = j.tsTypeAnnotation(j.tsStringKeyword());
        } else if (method.type === 'ClassMethod' && !method.returnType) {
            method.returnType = j.tsTypeAnnotation(j.tsStringKeyword());
        }
    }

    function isSymbolToStringTagGetter(node: any): boolean {
        return (
            node.kind === 'get' &&
            node.computed === true &&
            node.key.type === 'MemberExpression' &&
            node.key.object.name === 'Symbol' &&
            node.key.property.name === 'toStringTag'
        );
    }

    // NOTE: Process string template literals by replacing backticks with quotes.
    // Additionally also remove trailing new lines.
    root
        .find(j.TemplateLiteral)
        .forEach(path => {
            if (path.node.expressions.length === 0) {
                const rawValue = path.node.quasis[0].value.raw;
                const processedValue = processString(rawValue);
                j(path).replaceWith(j.stringLiteral(processedValue));
            }
        });

    // NOTE: Process [Symbol.toStringTag] getters in classes
    // by explicitly marking the return type as `string`.
    root
        .find(j.ClassBody)
        .forEach(path => {
            path.node.body.forEach(member => {
                if (isSymbolToStringTagGetter(member)) {
                    addStringReturnType(j(member).paths()[0]);
                }
            });
        });


    return `${root.toSource()}${file.source.endsWith('\n') ? '' : '\n'}`;
}
