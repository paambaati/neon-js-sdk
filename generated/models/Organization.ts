/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Organization = {
    id: string;
    name: string;
    handle: string;
    plan: string;
    /**
     * A timestamp indicting when the organization was created
     *
     */
    created_at: string;
    /**
     * Organizations created via the Console or the API are managed by `console`.
     * Organizations created by other methods can't be deleted via the Console or the API.
     *
     */
    managed_by: string;
    /**
     * A timestamp indicating when the organization was updated
     *
     */
    updated_at: string;
    /**
     * If true, allow account to mark projects as HIPAA
     */
    allow_hipaa_projects?: boolean;
};

