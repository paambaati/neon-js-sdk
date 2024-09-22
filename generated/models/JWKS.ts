/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type JWKS = {
    /**
     * JWKS ID
     */
    id: string;
    /**
     * Project ID
     */
    project_id: string;
    /**
     * Branch ID
     */
    branch_id?: string;
    /**
     * The URL that lists the JWKS
     */
    jwks_url: string;
    /**
     * The name of the authentication provider (e.g., Clerk, Stytch, Auth0)
     */
    provider_name: string;
    /**
     * The date and time when the JWKS was created
     */
    created_at: string;
    /**
     * The date and time when the JWKS was last modified
     */
    updated_at: string;
    /**
     * The name of the required JWT Audience to be used
     */
    jwt_audience?: string;
};

