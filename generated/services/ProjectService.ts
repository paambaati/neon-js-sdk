/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchResponse } from '../models/BranchResponse';
import type { ConnectionURIsResponse } from '../models/ConnectionURIsResponse';
import type { DatabasesResponse } from '../models/DatabasesResponse';
import type { EndpointsResponse } from '../models/EndpointsResponse';
import type { GeneralError } from '../models/GeneralError';
import type { GrantPermissionToProjectRequest } from '../models/GrantPermissionToProjectRequest';
import type { OperationsResponse } from '../models/OperationsResponse';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { ProjectCreateRequest } from '../models/ProjectCreateRequest';
import type { ProjectPermission } from '../models/ProjectPermission';
import type { ProjectPermissions } from '../models/ProjectPermissions';
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
     * @param cursor Specify the cursor value from the previous response to get the next batch of projects.
     * @param limit Specify a value from 1 to 400 to limit number of projects in the response.
     * @returns any Returned a list of projects for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjects(
        cursor?: string,
        limit: number = 10,
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
     * Plan limits define how many projects you can create.
     * Neon's Free plan permits one project per Neon account.
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
     * Get a list of shared projects
     * Retrieves a list of shared projects for the Neon account.
     * A project is the top-level object in the Neon object hierarchy.
     * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
     *
     * @param cursor Specify the cursor value from the previous response to get the next batch of projects.
     * @param limit Specify a value from 1 to 400 to limit number of projects in the response.
     * @returns any Returned a list of shared projects for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listSharedProjects(
        cursor?: string,
        limit: number = 10,
    ): CancelablePromise<(ProjectsResponse & PaginationResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/shared',
            query: {
                'cursor': cursor,
                'limit': limit,
            },
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
     * @returns any Updated the specified project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public updateProject(
        projectId: string,
        requestBody: ProjectUpdateRequest,
    ): CancelablePromise<(ProjectResponse & OperationsResponse) | GeneralError> {
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
     * Return project's permissions
     * Return project's permissions
     * @param projectId
     * @returns ProjectPermissions Successfully returned permissions
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectPermissions(
        projectId: string,
    ): CancelablePromise<ProjectPermissions | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/permissions',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * Grant project permission to the user
     * Grant project permission to the user
     * @param projectId
     * @param requestBody
     * @returns ProjectPermission Successfully granted permission to the user
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public grantPermissionToProject(
        projectId: string,
        requestBody: GrantPermissionToProjectRequest,
    ): CancelablePromise<ProjectPermission | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/permissions',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke permission from the user
     * Revoke permission from the user
     * @param projectId
     * @param permissionId
     * @returns ProjectPermission Successfully revoked permission from the user
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public revokePermissionFromProject(
        projectId: string,
        permissionId: string,
    ): CancelablePromise<ProjectPermission | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/permissions/{permission_id}',
            path: {
                'project_id': projectId,
                'permission_id': permissionId,
            },
        });
    }

}
