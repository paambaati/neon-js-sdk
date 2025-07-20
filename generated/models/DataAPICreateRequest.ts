/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create Neon Data API
 */
export type DataAPICreateRequest = {
    database_name?: string;
    /**
     * The URL that lists the JWKS
     */
    jwks_url?: string;
    /**
     * WARNING - using this setting will only reject tokens with a
     * different audience claim. Tokens without audience claim will still
     * be accepted.
     *
     */
    jwt_audience?: string;
};

