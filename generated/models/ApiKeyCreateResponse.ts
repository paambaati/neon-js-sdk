/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiKeyCreateResponse = {
    /**
     * The API key ID
     */
    id: number;
    /**
     * The generated 64-bit token required to access the Neon API
     */
    key: string;
    /**
     * The user-specified API key name
     */
    name: string;
    /**
     * A timestamp indicating when the API key was created
     */
    created_at: string;
};

