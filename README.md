# `neon-sdk`

Node.js and Deno SDK for managing your [Neon](https://neon.tech/) Serverless Postgres projects.

> **Note**
> Neon is a fully managed serverless PostgreSQL with a generous free tier. Neon separates storage and compute and offers modern developer features such as serverless, branching, bottomless storage, and more. Neon is open source and written in Rust.
> 
> [Learn more about Neon](https://neon.tech/docs/introduction/about)

## Usage

**Node.js (>= v18.x)**

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

**Deno**

1. Simply import the `neon-sdk` from npm using the [`npm:` specifier](https://deno.land/manual@v1.30.3/node/npm_specifiers) and initialize the client with your [Neon API token](https://neon.tech/docs/manage/api-keys#manage-api-keys-with-the-neon-api).

    ```typescript
    import { NeonClient } from "npm:neon-sdk";

    const neonClient = new NeonClient({
        TOKEN: "<INSERT NEON API KEY HERE>",
    });
    const projects = await neonClient.project.listProjects();
    console.log(projects);
    ```

## Developer Notes

This package is auto-generated from [Neon's OpenAPI reference](https://neon.tech/api-reference/v2/) using [`openapi-typescript-codegen`](https://www.npmjs.com/package/openapi-typescript-codegen).
