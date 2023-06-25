/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralError } from '../models/GeneralError';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { ProjectsConsumptionResponse } from '../models/ProjectsConsumptionResponse';
import type { ProjectsConsumptionResponseNew } from '../models/ProjectsConsumptionResponseNew';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PreviewService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieves a list consumption metrics for each project
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

    /**
     * Temporary handler. Retrieves a list consumption metrics for each project per period
     * This is temporary handler to make sure it is stable and consistent with data from old one.
     * Retrieves a list of consumption periods for each project. For the given period,
     * only current period by default.
     *
     * @param cursor Specify the cursor value from the previous response to get the next batch of projects.
     * @param limit Specify a value from 1 to 1000 to limit number of projects in the response.
     * @param from Specify the start of the period to get the consumption for.
     * If `from` or `to` is not specified, we return only current consumption period.
     *
     * @param to Specify the end of the period to get the consumption for.
     * If `from` or `to` is not specified, we return only current consumption period.
     *
     * @returns any Returned a list of project consumption metrics for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectsConsumptionNew(
        cursor?: string,
        limit: number = 10,
        from?: string,
        to?: string,
    ): CancelablePromise<(ProjectsConsumptionResponseNew & PaginationResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/consumption/projects/v2_tmp',
            query: {
                'cursor': cursor,
                'limit': limit,
                'from': from,
                'to': to,
            },
        });
    }

}
