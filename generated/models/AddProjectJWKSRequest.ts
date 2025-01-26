/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Add a new JWKS to a specific endpoint of a project
 */
export type AddProjectJWKSRequest = {
    /**
     * The URL that lists the JWKS
     */
    jwks_url: string;
    /**
     * The name of the authentication provider (e.g., Clerk, Stytch, Auth0)
     */
    provider_name: string;
    /**
     * Branch ID
     */
    branch_id?: string;
    /**
     * The name of the required JWT Audience to be used
     */
    jwt_audience?: string;
    /**
     * The roles the JWKS should be mapped to
     */
    role_names: Array<string>;
};

