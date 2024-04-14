/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointCreateRequest } from '../models/EndpointCreateRequest';
import type { EndpointOperations } from '../models/EndpointOperations';
import type { EndpointResponse } from '../models/EndpointResponse';
import type { EndpointsResponse } from '../models/EndpointsResponse';
import type { EndpointUpdateRequest } from '../models/EndpointUpdateRequest';
import type { GeneralError } from '../models/GeneralError';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EndpointService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a compute endpoint
     * Creates a compute endpoint for the specified branch.
     * An endpoint is a Neon compute instance.
     * There is a maximum of one read-write compute endpoint per branch.
     * If the specified branch already has a read-write compute endpoint, the operation fails.
     * A branch can have multiple read-only compute endpoints.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain `branch_id` by listing the project's branches.
     * A `branch_id` has a `br-` prefix.
     * For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).
     * For more information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns EndpointOperations Created a compute endpoint
     * @throws ApiError
     */
    public createProjectEndpoint(
        projectId: string,
        requestBody: EndpointCreateRequest,
    ): CancelablePromise<GeneralError | EndpointOperations> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/endpoints',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a list of compute endpoints
     * Retrieves a list of compute endpoints for the specified project.
     * A compute endpoint is a Neon compute instance.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
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
    /**
     * Get a compute endpoint
     * Retrieves information about the specified compute endpoint.
     * A compute endpoint is a Neon compute instance.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's compute endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @returns EndpointResponse Returned information about the specified endpoint
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectEndpoint(
        projectId: string,
        endpointId: string,
    ): CancelablePromise<EndpointResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/endpoints/{endpoint_id}',
            path: {
                'project_id': projectId,
                'endpoint_id': endpointId,
            },
        });
    }
    /**
     * Delete a compute endpoint
     * Delete the specified compute endpoint.
     * A compute endpoint is a Neon compute instance.
     * Deleting a compute endpoint drops existing network connections to the compute endpoint.
     * The deletion is completed when last operation in the chain finishes successfully.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's compute endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @returns EndpointOperations Deleted the specified compute endpoint
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectEndpoint(
        projectId: string,
        endpointId: string,
    ): CancelablePromise<EndpointOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/endpoints/{endpoint_id}',
            path: {
                'project_id': projectId,
                'endpoint_id': endpointId,
            },
        });
    }
    /**
     * Update a compute endpoint
     * Updates the specified compute endpoint.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` and `branch_id` by listing your project's compute endpoints.
     * An `endpoint_id` has an `ep-` prefix. A `branch_id` has a `br-` prefix.
     * For more information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
     *
     * If the returned list of operations is not empty, the compute endpoint is not ready to use.
     * The client must wait for the last operation to finish before using the compute endpoint.
     * If the compute endpoint was idle before the update, it becomes active for a short period of time,
     * and the control plane suspends it again after the update.
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @param requestBody
     * @returns EndpointOperations Updated the specified compute endpoint
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public updateProjectEndpoint(
        projectId: string,
        endpointId: string,
        requestBody: EndpointUpdateRequest,
    ): CancelablePromise<EndpointOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}/endpoints/{endpoint_id}',
            path: {
                'project_id': projectId,
                'endpoint_id': endpointId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Start a compute endpoint
     * Starts a compute endpoint. The compute endpoint is ready to use
     * after the last operation in chain finishes successfully.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's compute endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @returns EndpointOperations Started the specified compute endpoint
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public startProjectEndpoint(
        projectId: string,
        endpointId: string,
    ): CancelablePromise<EndpointOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/endpoints/{endpoint_id}/start',
            path: {
                'project_id': projectId,
                'endpoint_id': endpointId,
            },
        });
    }
    /**
     * Suspend a compute endpoint
     * Suspend the specified compute endpoint
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's compute endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @returns EndpointOperations Suspended the specified endpoint
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public suspendProjectEndpoint(
        projectId: string,
        endpointId: string,
    ): CancelablePromise<EndpointOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/endpoints/{endpoint_id}/suspend',
            path: {
                'project_id': projectId,
                'endpoint_id': endpointId,
            },
        });
    }
    /**
     * Restart a compute endpoint
     * Restart the specified compute endpoint: suspend immediately followed by start operations.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's compute endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @returns EndpointOperations Restarted endpoint
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public restartProjectEndpoint(
        projectId: string,
        endpointId: string,
    ): CancelablePromise<EndpointOperations | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/endpoints/{endpoint_id}/restart',
            path: {
                'project_id': projectId,
                'endpoint_id': endpointId,
            },
        });
    }
}
