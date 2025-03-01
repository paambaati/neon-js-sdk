import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
	// REFER: https://api-docs.neon.tech/reference/getting-started-with-neon-api
	// REFER: https://github.com/neondatabase/neon-api-python/blob/15176cfdedf8f5f04ed721883e2842e5be07bd75/Makefile#L56
	input: 'https://neon.tech/api_spec/release/v2.json',
	output: './generated/',
	plugins: ['legacy/fetch'],
	name: 'NeonClient',
});
