/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Database = {
    /**
     * The database ID
     *
     */
    id: number;
    /**
     * The ID of the branch to which the database belongs
     *
     */
    branch_id: string;
    /**
     * The database name
     *
     */
    name: string;
    /**
     * The name of role that owns the database
     *
     */
    owner_name: string;
    /**
     * A timestamp indicating when the database was created
     *
     */
    created_at: string;
    /**
     * A timestamp indicating when the database was last updated
     *
     */
    updated_at: string;
};

