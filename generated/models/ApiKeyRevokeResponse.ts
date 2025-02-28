/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApiKeyRevokeResponse = {
    /**
     * The API key ID
     */
    id: number;
    /**
     * The user-specified API key name
     */
    name: string;
    /**
     * A timestamp indicating when the API key was created
     */
    created_at: string;
    /**
     * ID of the user who created this API key
     */
    created_by: string;
    /**
     * A timestamp indicating when the API was last used
     */
    last_used_at?: string | null;
    /**
     * The IP address from which the API key was last used
     */
    last_used_from_addr: string;
    /**
     * A `true` or `false` value indicating whether the API key is revoked
     */
    revoked: boolean;
};

