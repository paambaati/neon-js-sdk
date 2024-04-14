/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralError } from '../models/GeneralError';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { ProjectsConsumptionResponse } from '../models/ProjectsConsumptionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConsumptionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project consumption metrics
     * Retrieves consumption metrics for each project for the current billing period.
     * For usage information, see [Retrieving metrics for all projects](https://neon.tech/docs/guides/partner-billing#retrieving-metrics-for-all-projects).
     *
     * @param cursor Specify the cursor value from the previous response to get the next batch of projects
     * @param limit Specify a value from 1 to 1000 to limit number of projects in the response
     * @param from Specify the start date-time for the consumption period.
     * The time value must be provided in ISO 8601 format.
     * If `from` or `to` is not specified, we return only current consumption period.
     *
     * @param to Specify the end date-time period for the consumption period.
     * The time value must be provided in ISO 8601 format.
     * If `from` or `to` is not specified, only the current consumption period is returned.
     *
     * @returns any Returned a list of project consumption metrics for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectsConsumption(
        cursor?: string,
        limit: number = 10,
        from?: string,
        to?: string,
    ): CancelablePromise<(ProjectsConsumptionResponse & PaginationResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/consumption/projects',
            query: {
                'cursor': cursor,
                'limit': limit,
                'from': from,
                'to': to,
            },
        });
    }
}
