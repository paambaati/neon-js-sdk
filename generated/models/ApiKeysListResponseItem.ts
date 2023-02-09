/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiKeysListResponseItem = {
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
     * A timestamp indicating when the API was last used
     */
    last_used_at?: string | null;
    /**
     * The IP address from which the API key was last used
     */
    last_used_from_addr: string;
};

