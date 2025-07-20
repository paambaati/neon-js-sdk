/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataAPICreateRequest } from '../models/DataAPICreateRequest';
import type { DataAPICreateResponse } from '../models/DataAPICreateResponse';
import type { DataAPIReponse } from '../models/DataAPIReponse';
import type { EmptyResponse } from '../models/EmptyResponse';
import type { GeneralError } from '../models/GeneralError';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DataApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create Neon Data API
     * Creates a new instance of Neon Data API in the specified branch.
     * You can obtain the `project_id` and `branch_id` by listing the projects and branches for your Neon account.
     *
     * @param projectId The Neon project ID
     * @param branchId The Neon branch ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns DataAPICreateResponse Creates a new app
     * @throws ApiError
     */
    public createProjectBranchDataApi(
        projectId: string,
        branchId: string,
        requestBody?: DataAPICreateRequest,
    ): CancelablePromise<GeneralError | DataAPICreateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/branches/{branch_id}/data-api',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete Neon Data API
     * Deletes the Neon Data API for the specified branch.
     * You can obtain the `project_id` and `branch_id` by listing the projects and branches for your Neon account.
     *
     * @param projectId The Neon project ID
     * @param branchId The Neon branch ID
     * @returns EmptyResponse Deleted the Neon Data API for the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectBranchDataApi(
        projectId: string,
        branchId: string,
    ): CancelablePromise<EmptyResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/branches/{branch_id}/data-api',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
        });
    }
    /**
     * Get Neon Data API
     * Retrieves the Neon Data API for the specified branch.
     *
     * @param projectId The Neon project ID
     * @param branchId The Neon branch ID
     * @returns DataAPIReponse Returns the Neon Data API for the specified branch
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getProjectBranchDataApi(
        projectId: string,
        branchId: string,
    ): CancelablePromise<DataAPIReponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/branches/{branch_id}/data-api',
            path: {
                'project_id': projectId,
                'branch_id': branchId,
            },
        });
    }
}
