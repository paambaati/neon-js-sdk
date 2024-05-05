/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OuterbaseWorkspace } from './OuterbaseWorkspace';
export type OuterbaseProjectResponse = {
    /**
     * The ID of the project
     */
    project_id?: string;
    /**
     * The list of workspaces associated with the Outerbase integrations
     */
    workspaces?: Array<OuterbaseWorkspace>;
    /**
     * The current repository associated with the GitHub App
     */
    current_workspace_id?: string;
    /**
     * ID of "base" entity
     */
    base_id?: string;
    /**
     * ID of "connection" entity
     */
    connection_id?: string;
    /**
     * ID of "source" entity
     */
    source_id?: string;
    /**
     * The neon database role
     */
    role?: string;
    /**
     * The neon database name
     */
    db?: string;
};

