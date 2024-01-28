/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A list of IP addresses that are allowed to connect to the endpoint.
 * If the list is empty or not set, all IP addresses are allowed.
 * If primary_branch_only is true, the list will be applied only to the primary branch.
 *
 */
export type AllowedIps = {
    /**
     * A list of IP addresses that are allowed to connect to the endpoint.
     */
    ips?: Array<string>;
    /**
     * If true, the list will be applied only to the primary branch.
     */
    primary_branch_only: boolean;
};

