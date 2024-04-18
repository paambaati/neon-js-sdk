/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A list of IP addresses that are allowed to connect to the compute endpoint.
 * If the list is empty or not set, all IP addresses are allowed.
 * If protected_branches_only is true, the list will be applied only to protected branches.
 *
 */
export type AllowedIps = {
    /**
     * A list of IP addresses that are allowed to connect to the endpoint.
     */
    ips?: Array<string>;
    /**
     * If true, the list will be applied only to protected branches.
     */
    protected_branches_only?: boolean;
    /**
     * If true, the list will be applied only to the primary branch.
     */
    primary_branch_only?: boolean;
};

