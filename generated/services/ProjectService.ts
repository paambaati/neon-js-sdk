/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddProjectJWKSRequest } from '../models/AddProjectJWKSRequest';
import type { AvailablePreloadLibraries } from '../models/AvailablePreloadLibraries';
import type { BranchResponse } from '../models/BranchResponse';
import type { ConnectionURIResponse } from '../models/ConnectionURIResponse';
import type { ConnectionURIsResponse } from '../models/ConnectionURIsResponse';
import type { DatabasesResponse } from '../models/DatabasesResponse';
import type { EndpointsResponse } from '../models/EndpointsResponse';
import type { GeneralError } from '../models/GeneralError';
import type { GrantPermissionToProjectRequest } from '../models/GrantPermissionToProjectRequest';
import type { JWKS } from '../models/JWKS';
import type { JWKSCreationOperation } from '../models/JWKSCreationOperation';
import type { OperationsResponse } from '../models/OperationsResponse';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { ProjectCreateRequest } from '../models/ProjectCreateRequest';
import type { ProjectJWKSResponse } from '../models/ProjectJWKSResponse';
import type { ProjectPermission } from '../models/ProjectPermission';
import type { ProjectPermissions } from '../models/ProjectPermissions';
import type { ProjectResponse } from '../models/ProjectResponse';
import type { ProjectsApplicationsMapResponse } from '../models/ProjectsApplicationsMapResponse';
import type { ProjectsIntegrationsMapResponse } from '../models/ProjectsIntegrationsMapResponse';
import type { ProjectsResponse } from '../models/ProjectsResponse';
import type { ProjectTransferRequestResponse } from '../models/ProjectTransferRequestResponse';
import type { ProjectUpdateRequest } from '../models/ProjectUpdateRequest';
import type { RolesResponse } from '../models/RolesResponse';
import type { VPCEndpointAssignment } from '../models/VPCEndpointAssignment';
import type { VPCEndpointsResponse } from '../models/VPCEndpointsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List projects
     * Retrieves a list of projects for an organization.
     * You may need to specify an org_id parameter depending on your API key type.
     * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
     *
     * @param cursor Specify the cursor value from the previous response to retrieve the next batch of projects.
     * @param limit Specify a value from 1 to 400 to limit number of projects in the response.
     * @param search Search by project `name` or `id`. You can specify partial `name` or `id` values to filter results.
     * @param orgId Search for projects by `org_id`.
     * @param timeout Specify an explicit timeout in milliseconds to limit response delay.
     * After timing out, the incomplete list of project data fetched so far will be returned.
     * Projects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response.
     * If not specified, an implicit implementation defined timeout is chosen with the same behaviour as above
     *
     * @returns any Returned a list of projects for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjects(
        cursor?: string,
        limit: number = 10,
        search?: string,
        orgId?: string,
        timeout?: number,
    ): CancelablePromise<(ProjectsResponse & PaginationResponse & ProjectsApplicationsMapResponse & ProjectsIntegrationsMapResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects',
            query: {
                'cursor': cursor,
                'limit': limit,
                'search': search,
                'org_id': orgId,
                'timeout': timeout,
            },
        });
    }
    /**
     * Create project
     * Creates a Neon project within an organization.
     * You may need to specify an org_id parameter depending on your API key type.
     * Plan limits define how many projects you can create.
     * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
     *
     * You can specify a region and Postgres version in the request body.
     * Neon currently supports PostgreSQL 14, 15, 16, and 17.
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
     * List shared projects
     * Retrieves a list of projects shared with your Neon account.
     * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
     *
     * @param cursor Specify the cursor value from the previous response to get the next batch of projects.
     * @param limit Specify a value from 1 to 400 to limit number of projects in the response.
     * @param search Search query by name or id.
     * @param timeout Specify an explicit timeout in milliseconds to limit response delay.
     * After timing out, the incomplete list of project data fetched so far will be returned.
     * Projects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response.
     * If not specified, an implicit implementation defined timeout is chosen with the same behaviour as above
     *
     * @returns any Returned a list of shared projects for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listSharedProjects(
        cursor?: string,
        limit: number = 10,
        search?: string,
        timeout?: number,
    ): CancelablePromise<(ProjectsResponse & PaginationResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/shared',
            query: {
                'cursor': cursor,
                'limit': limit,
                'search': search,
                'timeout': timeout,
            },
        });
    }
    /**
     * Retrieve project details
     * Retrieves information about the specified project.
     * You can obtain a `project_id` by listing the projects for an organization.
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
     * Update project
     * Updates the specified project.
     * You can obtain a `project_id` by listing the projects for your Neon account.
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
     * Delete project
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
     * List project access
     * Retrieves details about users who have access to the project, including the permission `id`, the granted-to email address, and the date project access was granted.
     * @param projectId
     * @returns ProjectPermissions Returned project access details
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
     * Grant project access
     * Grants project access to the account associated with the specified email address
     * @param projectId
     * @param requestBody
     * @returns ProjectPermission Granted project access
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
     * Revoke project access
     * Revokes project access from the user associated with the specified permission `id`. You can retrieve a user's permission `id` by listing project access.
     * @param projectId
     * @param permissionId
     * @returns ProjectPermission Revoked project access
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
    /**
     * Return available shared preload libraries
     * Return available shared preload libraries
     * @param projectId
     * @returns AvailablePreloadLibraries Successfully returned available shared preload libraries
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getAvailablePreloadLibraries(
        projectId: string,
    ): CancelablePromise<AvailablePreloadLibraries | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/available_preload_libraries',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Create a project transfer request
     * Creates a transfer request for the specified project. A transfer request allows
     * the project to be transferred to another account or organization. The request
     * has an expiration time after which it can no longer be used. To accept/claim
     * the transfer request, the recipient user/organization must call the
     * `/projects/{project_id}/transfer_requests/{request_id}` API endpoint, or visit
     * `https://console.neon.tech/app/claim?p={project_id}&tr={request_id}&ru={redirect_url}`
     * in the Neon Console. The `ru` parameter is optional and can be used to redirect
     * the user after accepting the transfer request. This feature is currently in
     * private preview. Get in touch with us to get access.
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns ProjectTransferRequestResponse Project transfer request created successfully
     * @throws ApiError
     */
    public createProjectTransferRequest(
        projectId: string,
        requestBody?: {
            /**
             * Specifies the validity duration of the transfer request in seconds. If not provided,
             * the request will expire after 24 hours (86,400 seconds).
             *
             */
            ttl_seconds?: number;
        },
    ): CancelablePromise<GeneralError | ProjectTransferRequestResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/transfer_requests',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Accept a project transfer request
     * Accepts a transfer request for the specified project, transferring it to the specified organization
     * or user. If org_id is not passed, the project will be transferred to the current user or organization account.
     *
     * @param projectId The Neon project ID
     * @param requestId The Neon project transfer request ID
     * @param requestBody
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public acceptProjectTransferRequest(
        projectId: string,
        requestId: string,
        requestBody?: {
            /**
             * The Neon organization ID to transfer the project to. If not provided, the project will be
             * transferred to the current user or organization account.
             *
             */
            org_id?: string;
        },
    ): CancelablePromise<GeneralError> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/projects/{project_id}/transfer_requests/{request_id}',
            path: {
                'project_id': projectId,
                'request_id': requestId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List JWKS URLs
     * Returns the JWKS URLs available for verifying JWTs used as the authentication mechanism for the specified project.
     *
     * @param projectId The Neon project ID
     * @returns ProjectJWKSResponse The JWKS URLs available for the project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectJwks(
        projectId: string,
    ): CancelablePromise<ProjectJWKSResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/jwks',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Add JWKS URL
     * Add a new JWKS URL to a project, such that it can be used for verifying JWTs used as the authentication mechanism for the specified project.
     *
     * The URL must be a valid HTTPS URL that returns a JSON Web Key Set.
     *
     * The `provider_name` field allows you to specify which authentication provider you're using (e.g., Clerk, Auth0, AWS Cognito, etc.).
     *
     * The `branch_id` can be used to specify on which branches the JWKS URL will be accepted. If not specified, then it will work on any branch.
     *
     * The `role_names` can be used to specify for which roles the JWKS URL will be accepted.
     *
     * The `jwt_audience` can be used to specify which "aud" values should be accepted by Neon in the JWTs that are used for authentication.
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns JWKSCreationOperation The JWKS URL was added to the project's authentication connections
     * @throws ApiError
     */
    public addProjectJwks(
        projectId: string,
        requestBody: AddProjectJWKSRequest,
    ): CancelablePromise<GeneralError | JWKSCreationOperation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/jwks',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete JWKS URL
     * Deletes a JWKS URL from the specified project
     * @param projectId The Neon project ID
     * @param jwksId The JWKS ID
     * @returns JWKS Deleted a JWKS URL from the project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectJwks(
        projectId: string,
        jwksId: string,
    ): CancelablePromise<JWKS | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/jwks/{jwks_id}',
            path: {
                'project_id': projectId,
                'jwks_id': jwksId,
            },
        });
    }
    /**
     * Retrieve connection URI
     * Retrieves a connection URI for the specified database.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `database_name` by listing the databases for a branch.
     * You can obtain a `role_name` by listing the roles for a branch.
     *
     * @param projectId The Neon project ID
     * @param databaseName The database name
     * @param roleName The role name
     * @param branchId The branch ID. Defaults to your project's default `branch_id` if not specified.
     * @param endpointId The endpoint ID. Defaults to the read-write `endpoint_id` associated with the `branch_id` if not specified.
     * @param pooled Adds the `-pooler` option to the connection URI when set to `true`, creating a pooled connection URI.
     * @returns ConnectionURIResponse Returned the connection URI
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getConnectionUri(
        projectId: string,
        databaseName: string,
        roleName: string,
        branchId?: string,
        endpointId?: string,
        pooled?: boolean,
    ): CancelablePromise<ConnectionURIResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/connection_uri',
            path: {
                'project_id': projectId,
            },
            query: {
                'branch_id': branchId,
                'endpoint_id': endpointId,
                'database_name': databaseName,
                'role_name': roleName,
                'pooled': pooled,
            },
        });
    }
    /**
     * List VPC endpoint restrictions
     * Lists VPC endpoint restrictions for the specified Neon project.
     *
     * @param projectId The Neon project ID
     * @returns VPCEndpointsResponse Returned VPC endpoint restrictions for the specified project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectVpcEndpoints(
        projectId: string,
    ): CancelablePromise<VPCEndpointsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/vpc_endpoints',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Set VPC endpoint restriction
     * Sets or updates a VPC endpoint restriction for a Neon project.
     * When a VPC endpoint restriction is set, the project only accepts connections
     * from the specified VPC.
     * A VPC endpoint can be set as a restriction only after it is assigned to the
     * parent organization of the Neon project.
     *
     * @param projectId The Neon project ID
     * @param vpcEndpointId The VPC endpoint ID
     * @param requestBody
     * @returns any Configured the specified VPC endpoint as a restriction for the specified project.
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public assignProjectVpcEndpoint(
        projectId: string,
        vpcEndpointId: string,
        requestBody: VPCEndpointAssignment,
    ): CancelablePromise<any | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}',
            path: {
                'project_id': projectId,
                'vpc_endpoint_id': vpcEndpointId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete VPC endpoint restriction
     * Removes the specified VPC endpoint restriction from a Neon project.
     *
     * @param projectId The Neon project ID
     * @param vpcEndpointId The VPC endpoint ID
     * @returns any Removed the VPC endpoint restriction from the specified Neon project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectVpcEndpoint(
        projectId: string,
        vpcEndpointId: string,
    ): CancelablePromise<any | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}',
            path: {
                'project_id': projectId,
                'vpc_endpoint_id': vpcEndpointId,
            },
        });
    }
}
