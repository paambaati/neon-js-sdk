import assert from 'node:assert';
import path from 'node:path';
import { describe, test } from 'node:test';
import createDiagnostic from 'tsd';

describe('Type Tests', () => {
	test('type definitions must be correct', async () => {
		const typesTestPath = path.join(__dirname, './types.test-d.ts');

		const diagnostics = await createDiagnostic({
			cwd: process.cwd(),
			testFiles: [typesTestPath],
			typingsFile: './dist/index.d.ts',
		});

		if (diagnostics.length > 0) {
			for (const diagnostic of diagnostics) {
				console.error(
					`Type error at ${diagnostic.fileName}:${diagnostic.line}:${diagnostic.column}`,
				);
				console.error(`  ${diagnostic.message}`);
			}
			assert.fail(`Type check failed with ${diagnostics.length} error(s)`);
		}

		assert.strictEqual(diagnostics.length, 0, 'Types are correct');
	});
});
