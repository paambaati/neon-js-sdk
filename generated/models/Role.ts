/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Role = {
    /**
     * The ID of the branch to which the role belongs
     *
     */
    branch_id: string;
    /**
     * The role name
     *
     */
    name: string;
    /**
     * The role password
     *
     */
    password?: string;
    /**
     * Whether or not the role is system-protected
     *
     */
    protected?: boolean;
    /**
     * A timestamp indicating when the role was created
     *
     */
    created_at: string;
    /**
     * A timestamp indicating when the role was last updated
     *
     */
    updated_at: string;
};

