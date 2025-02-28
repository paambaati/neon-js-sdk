/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectListItem } from './ProjectListItem';
export type ProjectsResponse = {
    projects: Array<ProjectListItem>;
    /**
     * A list of project IDs indicating which projects are known to exist, but whose details could not
     * be fetched within the requested (or implicit) time limit
     *
     */
    unavailable_project_ids?: Array<string>;
};

