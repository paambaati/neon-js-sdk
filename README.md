# `neon-sdk`

![CI](https://github.com/paambaati/neon-js-sdk/actions/workflows/ci.yml/badge.svg)
[![NPM Version](https://img.shields.io/npm/v/neon-sdk.svg?logo=npm)](https://www.npmjs.com/package/neon-sdk)
![JSR Version](https://img.shields.io/jsr/v/%40httgp/neon-sdk)

Fully-typed, zero-dependency Node.js and Deno SDK for managing your [Neon](https://neon.tech/) Serverless Postgres projects.

> **Note**

> Neon is a fully managed serverless PostgreSQL with a generous free tier. Neon separates storage and compute and offers modern developer features such as serverless, branching, bottomless storage, and more. Neon is open source and written in Rust.
> 
> [Learn more about Neon](https://neon.tech/docs/introduction/about)

## Usage

### Node.js

1. Install `neon-sdk` as a dependency using the package manager of your choice.

    ```bash
    npm i neon-sdk
    ```

2. Initialize the client with your [Neon API token](https://neon.tech/docs/manage/api-keys#manage-api-keys-with-the-neon-api).

    ```typescript
    import { NeonClient } from 'neon-sdk';

    const neonClient = new NeonClient({
        TOKEN: '<INSERT NEON API KEY HERE>',
    });

    (async () => {
        const projects = await neonClient.project.listProjects();
        console.log(projects);
    })()
    ```

### Deno

1. Add the `neon-sdk` package from JSR –

    ```bash
    deno add @httgp/neon-sdk
    ```

2. Now import the module and initialize the client with your [Neon API token](https://neon.tech/docs/manage/api-keys#manage-api-keys-with-the-neon-api).

    ```typescript
    import { NeonClient } from "@httgp/neon-sdk";

    const neonClient = new NeonClient({
        TOKEN: "<INSERT NEON API KEY HERE>",
    });
    const projects = await neonClient.project.listProjects();
    console.log(projects);
    ```

    Make sure to allow `net` permissions to `console.neon.tech` for the code to run.

    ```bash
    deno run --allow-net=console.neon.tech neon.ts
    ```

2. Alternatively, the `neon-sdk` package is also available from npm, which can be used with the [`npm:` specifier](https://deno.land/manual@v1.30.3/node/npm_specifiers).

    ```typescript
    import { NeonClient } from "npm:neon-sdk";

    const neonClient = new NeonClient({
        TOKEN: "<INSERT NEON API KEY HERE>",
    });
    const projects = await neonClient.project.listProjects();
    console.log(projects);
    ```

## Recipes

All API responses are typed as a union of the specific API's successful response and `GeneralError`. To narrow this type down –

```typescript
import { NeonClient, type GeneralError } from 'neon-sdk';

function isNeonError(neonResponse: unknown): neonResponse is GeneralError {
    const allowedKeys = ['code', 'message'].sort();
    const foundKeys = Object.getOwnPropertyNames(neonResponse || {}).sort();
    return foundKeys.length === allowedKeys.length
            && foundKeys.every((value, index) => value === allowedKeys[index])
            && (neonResponse as GeneralError).code !== undefined
            && (neonResponse as GeneralError).message !== undefined;
}

const neonClient = new NeonClient({
    TOKEN: '<INSERT NEON API KEY HERE>',
});
const response = await neonClient.project.listProjects();

if (!isNeonError(response)) {
    // Correctly typed as `ProjectsResponse`
    response
}
```
## Developer Notes

This package is auto-generated from [Neon's OpenAPI reference](https://neon.tech/api-reference/v2/) using [`@hey-api/openapi-ts`](https://github.com/hey-api/openapi-ts).
