/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TransferProjectsToOrganizationRequest = {
    /**
     * The destination organization identifier
     */
    destination_org_id: string;
    /**
     * The list of projects ids to transfer. Maximum of 400 project ids
     */
    project_ids: Array<string>;
};

