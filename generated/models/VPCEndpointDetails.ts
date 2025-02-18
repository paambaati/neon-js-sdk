/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VPCEndpointDetails = {
    /**
     * The VPC endpoint ID
     */
    vpc_endpoint_id: string;
    /**
     * A descriptive label for the VPC endpoint
     */
    label: string;
    /**
     * The current state of the VPC endpoint. Possible values are
     * `new` (just configured, pending acceptance) or `accepted`
     * (VPC connection was accepted by Neon).
     *
     */
    state: string;
    /**
     * The number of projects that are restricted to use this VPC endpoint.
     *
     */
    num_restricted_projects: number;
    /**
     * A list of example projects that are restricted to use this VPC endpoint.
     * There are at most 3 projects in the list, even if more projects are restricted.
     *
     */
    example_restricted_projects: Array<string>;
};

