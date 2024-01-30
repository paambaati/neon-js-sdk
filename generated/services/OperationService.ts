/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralError } from '../models/GeneralError';
import type { OperationResponse } from '../models/OperationResponse';
import type { OperationsResponse } from '../models/OperationsResponse';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OperationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get operation details
     * Retrieves details for the specified operation.
     * An operation is an action performed on a Neon project resource.
     * You can obtain a `project_id` by listing the projects for your Neon account.
     * You can obtain a `operation_id` by listing operations for the project.
     *
     * @param projectId The Neon project ID
     * @param operationId The operation ID
     * @returns OperationResponse Returned details for the specified operation
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectOperation(
        projectId: string,
        operationId: string,
    ): CancelablePromise<OperationResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/operations/{operation_id}',
            path: {
                'project_id': projectId,
                'operation_id': operationId,
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
}
