/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchCreateRequest } from '../models/BranchCreateRequest';
import type { BranchesResponse } from '../models/BranchesResponse';
import type { BranchResponse } from '../models/BranchResponse';
import type { ConnectionURIsResponse } from '../models/ConnectionURIsResponse';
import type { DatabasesResponse } from '../models/DatabasesResponse';
import type { EndpointsResponse } from '../models/EndpointsResponse';
import type { GeneralError } from '../models/GeneralError';
import type { OperationsResponse } from '../models/OperationsResponse';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { ProjectCreateRequest } from '../models/ProjectCreateRequest';
import type { ProjectOperations } from '../models/ProjectOperations';
import type { ProjectResponse } from '../models/ProjectResponse';
import type { ProjectsResponse } from '../models/ProjectsResponse';
import type { ProjectUpdateRequest } from '../models/ProjectUpdateRequest';
import type { RolesResponse } from '../models/RolesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a list of projects
     * Retrieves a list of projects for the Neon account.
     * A project is the top-level object in the Neon object hierarchy.
     * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
     *
     * @param cursor Specify the cursor value from the previous response to get the next batch of projects
     * @param limit Specify a value from 1 to 1000 to limit number of projects in the response
     * @returns any Returned a list of projects for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjects(
        cursor?: string,
        limit?: number,
    ): CancelablePromise<(ProjectsResponse & PaginationResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects',
            query: {
                'cursor': cursor,
                'limit': limit,
            },
        });
    }

    /**
     * Create a project
     * Creates a Neon project.
     * A project is the top-level object in the Neon object hierarchy.
     * Tier limits define how many projects you can create.
     * Neon's Free Tier permits one project per Neon account.
     * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
     *
     * You can specify a region and PostgreSQL version in the request body.
     * Neon currently supports PostgreSQL 14 and 15.
     * For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).
     *
     * @param requestBody
     * @returns GeneralError General Error
     * @returns any Created a project.
     * The project includes a connection URI with a database, password, and role.
     * At least one non-protected role is created with a password.
     * Wait until the operations are finished before attempting to connect to a project database.
     *
     * @throws ApiError
     */
    public createProject(
        requestBody: ProjectCreateRequest,
    ): CancelablePromise<GeneralError | (ProjectResponse & ConnectionURIsResponse & RolesResponse & DatabasesResponse & OperationsResponse & BranchResponse & EndpointsResponse)> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get project details
     * Retrieves information about the specified project.
     * A project is the top-level object in the Neon object hierarchy.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     *
     * @param projectId The Neon project ID
     * @returns ProjectResponse Returned information about the specified project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProject(
        projectId: string,
    ): CancelablePromise<ProjectResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * Update a project
     * Updates the specified project.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * Neon permits updating the project name only.
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns ProjectOperations Updated the specified project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public updateProject(
        projectId: string,
        requestBody: ProjectUpdateRequest,
    ): CancelablePromise<ProjectOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a project
     * Deletes the specified project.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * Deleting a project is a permanent action.
     * Deleting a project also deletes endpoints, branches, databases, and users that belong to the project.
     *
     * @param projectId The Neon project ID
     * @returns ProjectResponse Deleted the specified project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProject(
        projectId: string,
    ): CancelablePromise<ProjectResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * Get a list of operations
     * Retrieves a list of operations for the specified Neon project.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * The number of operations returned can be large.
     * To paginate the response, issue an initial request with a `limit` value.
     * Then, add the `cursor` value that was returned in the response to the next request.
     *
     * @param projectId The Neon project ID
     * @param cursor Specify the cursor value from the previous response to get the next batch of operations
     * @param limit Specify a value from 1 to 1000 to limit number of operations in the response
     * @returns any Returned a list of operations
     *
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectOperations(
        projectId: string,
        cursor?: string,
        limit?: number,
    ): CancelablePromise<(OperationsResponse & PaginationResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/operations',
            path: {
                'project_id': projectId,
            },
            query: {
                'cursor': cursor,
                'limit': limit,
            },
        });
    }

    /**
     * Create a branch
     * Creates a branch in the specified project.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     *
     * This method does not require a request body, but you can specify one to create an endpoint for the branch or to select a non-default parent branch.
     * The default behavior is to create a branch from the project's root branch (`main`) with no endpoint, and the branch name is auto-generated.
     * For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns any Created a branch. An endpoint is only created if it was specified in the request.
     * @throws ApiError
     */
    public createProjectBranch(
        projectId: string,
        requestBody?: BranchCreateRequest,
    ): CancelablePromise<GeneralError | (BranchResponse & EndpointsResponse & OperationsResponse & ConnectionURIsResponse)> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/branches',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a list of branches
     * Retrieves a list of branches for the specified project.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     *
     * Each Neon project has a root branch named `main`.
     * A `branch_id` value has a `br-` prefix.
     * A project may contain child branches that were branched from `main` or from another branch.
     * A parent branch is identified by the `parent_id` value, which is the `id` of the parent branch.
     * For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).
     *
     * @param projectId The Neon project ID
     * @returns BranchesResponse Returned a list of branches for the specified project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectBranches(
        projectId: string,
    ): CancelablePromise<BranchesResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * Get a list of endpoints
     * Retrieves a list of endpoints for the specified project.
     * An endpoint is a Neon compute instance.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @returns EndpointsResponse Returned a list of endpoints for the specified project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectEndpoints(
        projectId: string,
    ): CancelablePromise<EndpointsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/endpoints',
            path: {
                'project_id': projectId,
            },
        });
    }

}
