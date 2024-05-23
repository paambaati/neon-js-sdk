import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://neon.tech/api_spec/release/v2.json',
  output: './generated/',
  client: 'fetch',
  services: {
    asClass: true,
  },
});
