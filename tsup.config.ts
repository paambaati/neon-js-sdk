import { defineConfig } from 'tsup'

export default defineConfig({
    entry: [
        'generated/index.ts',
    ],
    target: 'node18',
    format: [
        'cjs',
        'esm',
    ],
    dts: true,
    sourcemap: false,
    clean: true,
});
