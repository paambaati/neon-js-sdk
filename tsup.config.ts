import { defineConfig } from 'tsup'

export default defineConfig({
    entry: [
        'generated/NeonClient.ts',
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
