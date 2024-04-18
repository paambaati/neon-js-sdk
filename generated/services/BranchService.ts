/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchCreateRequest } from '../models/BranchCreateRequest';
import type { BranchesResponse } from '../models/BranchesResponse';
import type { BranchOperations } from '../models/BranchOperations';
import type { BranchResponse } from '../models/BranchResponse';
import type { BranchRestoreRequest } from '../models/BranchRestoreRequest';
import type { BranchUpdateRequest } from '../models/BranchUpdateRequest';
import type { ConnectionURIsOptionalResponse } from '../models/ConnectionURIsOptionalResponse';
import type { DatabaseCreateRequest } from '../models/DatabaseCreateRequest';
import type { DatabaseOperations } from '../models/DatabaseOperations';
import type { DatabaseResponse } from '../models/DatabaseResponse';
import type { DatabasesResponse } from '../models/DatabasesResponse';
import type { DatabaseUpdateRequest } from '../models/DatabaseUpdateRequest';
import type { EndpointsResponse } from '../models/EndpointsResponse';
import type { GeneralError } from '../models/GeneralError';
import type { OperationsResponse } from '../models/OperationsResponse';
import type { RoleCreateRequest } from '../models/RoleCreateRequest';
import type { RoleOperations } from '../models/RoleOperations';
import type { RolePasswordResponse } from '../models/RolePasswordResponse';
import type { RoleResponse } from '../models/RoleResponse';
import type { RolesResponse } from '../models/RolesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BranchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a branch
     * Creates a branch in the specified project.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     *
     * This method does not require a request body, but you can specify one to create a compute endpoint for the branch or to select a non-default parent branch.
     * The default behavior is to create a branch from the project's primary branch with no compute endpoint, and the branch name is auto-generated.
     * There is a maximum of one read-write endpoint per branch.
     * A branch can have multiple read-only endpoints.
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
    ): CancelablePromise<GeneralError | (BranchResponse & EndpointsResponse & OperationsResponse & RolesResponse & DatabasesResponse & ConnectionURIsOptionalResponse)> {
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
     * Get branch details
     * Retrieves information about the specified branch.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain a `branch_id` by listing the project's branches.
     * A `branch_id` value has a `br-` prefix.
     *
     * Each Neon project is initially created with a root and primary branch named `main`.
     * A project can contain one or more branches.
     * A parent branch is identified by a `parent_id` value, which is the `id` of the parent branch.
     * For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @returns BranchResponse Returned information about the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectBranch(
        projectId: string,
        branchId: string,
    ): CancelablePromise<BranchResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches/{branch_id}',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
        });
    }
    /**
     * Delete a branch
     * Deletes the specified branch from a project, and places
     * all compute endpoints into an idle state, breaking existing client connections.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain a `branch_id` by listing the project's branches.
     * For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).
     *
     * When a successful response status is received, the compute endpoints are still active,
     * and the branch is not yet deleted from storage.
     * The deletion occurs after all operations finish.
     * You cannot delete a project's root or primary branch, and you cannot delete a branch that has a child branch.
     * A project must have at least one branch.
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @returns BranchOperations Deleted the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectBranch(
        projectId: string,
        branchId: string,
    ): CancelablePromise<BranchOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/branches/{branch_id}',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
        });
    }
    /**
     * Update a branch
     * Updates the specified branch.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * For more information, see [Manage branches](https://neon.tech/docs/manage/branches/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param requestBody
     * @returns BranchOperations Updated the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public updateProjectBranch(
        projectId: string,
        branchId: string,
        requestBody: BranchUpdateRequest,
    ): CancelablePromise<BranchOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}/branches/{branch_id}',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Restore a branch
     * Restores a branch to an earlier state in its own or another branch's history
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param requestBody
     * @returns BranchOperations Updated the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public restoreProjectBranch(
        projectId: string,
        branchId: string,
        requestBody: BranchRestoreRequest,
    ): CancelablePromise<BranchOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/branches/{branch_id}/restore',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Set branch as primary
     * Sets the specified branch as the project's primary branch.
     * The primary designation is automatically removed from the previous primary branch.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * For more information, see [Manage branches](https://neon.tech/docs/manage/branches/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @returns BranchOperations Updated the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public setPrimaryProjectBranch(
        projectId: string,
        branchId: string,
    ): CancelablePromise<BranchOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/branches/{branch_id}/set_as_primary',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
        });
    }
    /**
     * Get a list of branch endpoints
     * Retrieves a list of compute endpoints for the specified branch.
     * Neon permits only one read-write compute endpoint per branch.
     * A branch can have multiple read-only compute endpoints.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @returns EndpointsResponse Returned a list of endpoints for the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectBranchEndpoints(
        projectId: string,
        branchId: string,
    ): CancelablePromise<EndpointsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches/{branch_id}/endpoints',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
        });
    }
    /**
     * Get a list of databases
     * Retrieves a list of databases for the specified branch.
     * A branch can have multiple databases.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @returns DatabasesResponse Returned a list of databases of the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectBranchDatabases(
        projectId: string,
        branchId: string,
    ): CancelablePromise<DatabasesResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches/{branch_id}/databases',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
        });
    }
    /**
     * Create a database
     * Creates a database in the specified branch.
     * A branch can have multiple databases.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns DatabaseOperations Created a database in the specified branch
     * @throws ApiError
     */
    public createProjectBranchDatabase(
        projectId: string,
        branchId: string,
        requestBody: DatabaseCreateRequest,
    ): CancelablePromise<GeneralError | DatabaseOperations> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/branches/{branch_id}/databases',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get database details
     * Retrieves information about the specified database.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` and `database_name` by listing the branch's databases.
     * For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param databaseName The database name
     * @returns DatabaseResponse Returned the database details
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectBranchDatabase(
        projectId: string,
        branchId: string,
        databaseName: string,
    ): CancelablePromise<DatabaseResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches/{branch_id}/databases/{database_name}',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
                'database_name': databaseName,
            },
        });
    }
    /**
     * Update a database
     * Updates the specified database in the branch.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` and `database_name` by listing the branch's databases.
     * For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param databaseName The database name
     * @param requestBody
     * @returns DatabaseOperations Updated the database
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public updateProjectBranchDatabase(
        projectId: string,
        branchId: string,
        databaseName: string,
        requestBody: DatabaseUpdateRequest,
    ): CancelablePromise<DatabaseOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}/branches/{branch_id}/databases/{database_name}',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
                'database_name': databaseName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a database
     * Deletes the specified database from the branch.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` and `database_name` by listing the branch's databases.
     * For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param databaseName The database name
     * @returns DatabaseOperations Deleted the specified database
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectBranchDatabase(
        projectId: string,
        branchId: string,
        databaseName: string,
    ): CancelablePromise<DatabaseOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/branches/{branch_id}/databases/{database_name}',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
                'database_name': databaseName,
            },
        });
    }
    /**
     * Get a list of roles
     * Retrieves a list of Postgres roles from the specified branch.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @returns RolesResponse Returned a list of roles from the specified branch.
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectBranchRoles(
        projectId: string,
        branchId: string,
    ): CancelablePromise<RolesResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches/{branch_id}/roles',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
        });
    }
    /**
     * Create a role
     * Creates a Postgres role in the specified branch.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
     *
     * Connections established to the active compute endpoint will be dropped.
     * If the compute endpoint is idle, the endpoint becomes active for a short period of time and is suspended afterward.
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns RoleOperations Created a role in the specified branch
     * @throws ApiError
     */
    public createProjectBranchRole(
        projectId: string,
        branchId: string,
        requestBody: RoleCreateRequest,
    ): CancelablePromise<GeneralError | RoleOperations> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/branches/{branch_id}/roles',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get role details
     * Retrieves details about the specified role.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * You can obtain the `role_name` by listing the roles for a branch.
     * In Neon, the terms "role" and "user" are synonymous.
     * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param roleName The role name
     * @returns RoleResponse Returned details for the specified role
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectBranchRole(
        projectId: string,
        branchId: string,
        roleName: string,
    ): CancelablePromise<RoleResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches/{branch_id}/roles/{role_name}',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
                'role_name': roleName,
            },
        });
    }
    /**
     * Delete a role
     * Deletes the specified Postgres role from the branch.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * You can obtain the `role_name` by listing the roles for a branch.
     * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param roleName The role name
     * @returns RoleOperations Deleted the specified role from the branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectBranchRole(
        projectId: string,
        branchId: string,
        roleName: string,
    ): CancelablePromise<RoleOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/branches/{branch_id}/roles/{role_name}',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
                'role_name': roleName,
            },
        });
    }
    /**
     * Get role password
     * Retrieves the password for the specified Postgres role, if possible.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * You can obtain the `role_name` by listing the roles for a branch.
     * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param roleName The role name
     * @returns RolePasswordResponse Returned password for the specified role
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectBranchRolePassword(
        projectId: string,
        branchId: string,
        roleName: string,
    ): CancelablePromise<RolePasswordResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
                'role_name': roleName,
            },
            errors: {
                404: `Role not found`,
                412: `Storing passwords is disabled`,
            },
        });
    }
    /**
     * Reset the role password
     * Resets the password for the specified Postgres role.
     * Returns a new password and operations. The new password is ready to use when the last operation finishes.
     * The old password remains valid until last operation finishes.
     * Connections to the compute endpoint are dropped. If idle,
     * the compute endpoint becomes active for a short period of time.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain the `branch_id` by listing the project's branches.
     * You can obtain the `role_name` by listing the roles for a branch.
     * For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).
     *
     * @param projectId The Neon project ID
     * @param branchId The branch ID
     * @param roleName The role nam
     * @returns RoleOperations Reset the passsword for the specified role
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public resetProjectBranchRolePassword(
        projectId: string,
        branchId: string,
        roleName: string,
    ): CancelablePromise<RoleOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
                'role_name': roleName,
            },
        });
    }
}
