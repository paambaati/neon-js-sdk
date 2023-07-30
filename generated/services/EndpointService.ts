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
     * Create an endpoint
     * Creates an endpoint for the specified branch.
     * An endpoint is a Neon compute instance.
     * There is a maximum of one read-write endpoint per branch.
     * If the specified branch already has a read-write endpoint, the operation fails.
     * A branch can have multiple read-only endpoints.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain `branch_id` by listing the project's branches.
     * A `branch_id` has a `br-` prefix.
     * For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).
     * For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns EndpointOperations Created an endpoint
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

    /**
     * Get an endpoint
     * Retrieves information about the specified endpoint.
     * An endpoint is a Neon compute instance.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).
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
     * Delete an endpoint
     * Delete the specified endpoint.
     * An endpoint is a Neon compute instance.
     * Deleting an endpoint drops existing network connections to the endpoint.
     * The deletion is completed when last operation in the chain finishes successfully.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @returns EndpointOperations Deleted the specified endpoint
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
     * Update an endpoint
     * Updates the specified endpoint. Currently, only changing the associated branch is supported.
     * The branch that you specify cannot have an existing endpoint.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` and `branch_id` by listing your project's endpoints.
     * An `endpoint_id` has an `ep-` prefix. A `branch_id` has a `br-` prefix.
     * For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).
     *
     * If the returned list of operations is not empty, the endpoint is not ready to use.
     * The client must wait for the last operation to finish before using the endpoint.
     * If the endpoint was idle before the update, the endpoint becomes active for a short period of time,
     * and the control plane suspends it again after the update.
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @param requestBody
     * @returns EndpointOperations Updated the specified endpoint
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
     * Start an endpoint
     * Starts an endpoint. The endpoint is ready to use
     * after the last operation in chain finishes successfully.
     *
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).
     *
     * @param projectId The Neon project ID
     * @param endpointId The endpoint ID
     * @returns EndpointOperations Started the specified endpoint
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
     * Suspend an endpoint
     * Suspend the specified endpoint
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain an `endpoint_id` by listing your project's endpoints.
     * An `endpoint_id` has an `ep-` prefix.
     * For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).
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

}
