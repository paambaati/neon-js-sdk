/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralError } from '../models/GeneralError';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { ProjectsConsumptionResponse } from '../models/ProjectsConsumptionResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PreviewService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Rerives a list consumption metrics for each project
     * This is a preview API and is subject to changes in the future.
     *
     * Retrieves a list project consumption metrics for each project for the current billing period.
     *
     * @param cursor Specify the cursor value from the previous response to get the next batch of projects.
     * @param limit Specify a value from 1 to 1000 to limit number of projects in the response.
     * @returns any Returned a list of project consumption metrics for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectsConsumption(
        cursor?: string,
        limit: number = 10,
    ): CancelablePromise<(ProjectsConsumptionResponse & PaginationResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/consumption/projects',
            query: {
                'cursor': cursor,
                'limit': limit,
            },
        });
    }

}
