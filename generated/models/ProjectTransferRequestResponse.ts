/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProjectTransferRequestResponse = {
    /**
     * The unique identifier for the transfer request
     */
    id: string;
    /**
     * The ID of the project that is being transferred
     */
    project_id: string;
    /**
     * The timestamp when the transfer request was created
     */
    created_at: string;
    /**
     * The timestamp when the transfer request will expire
     */
    expires_at: string;
};

