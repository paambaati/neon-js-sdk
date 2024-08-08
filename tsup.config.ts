import { defineConfig } from 'tsup'

export default defineConfig({
    entry: [
        'generated/index.ts',
    ],
    target: 'node20',
    format: [
        'cjs',
        'esm',
    ],
    dts: true,
    sourcemap: false,
    clean: true,
});
