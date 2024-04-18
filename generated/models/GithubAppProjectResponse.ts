/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GithubAppRepository } from './GithubAppRepository';
export type GithubAppProjectResponse = {
    /**
     * The ID of the project
     */
    project_id?: string;
    /**
     * The ID of the GitHub App installation
     */
    installation_id?: number;
    /**
     * The list of repositories associated with the GitHub App
     */
    repositories?: Array<GithubAppRepository>;
    /**
     * The current repository associated with the GitHub App
     */
    current_repository?: string;
    /**
     * The timestamp when the GitHub App was created
     */
    created_at?: string;
    /**
     * The timestamp when the GitHub App was last updated
     */
    updated_at?: string;
    /**
     * The ID of the current repository associated with the GitHub App
     */
    current_repository_id?: number;
    /**
     * The neon database role
     */
    role?: string;
    /**
     * The neon database name
     */
    db?: string;
};

