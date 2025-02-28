/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConsumptionHistoryGranularity } from '../models/ConsumptionHistoryGranularity';
import type { ConsumptionHistoryPerAccountResponse } from '../models/ConsumptionHistoryPerAccountResponse';
import type { ConsumptionHistoryPerProjectResponse } from '../models/ConsumptionHistoryPerProjectResponse';
import type { GeneralError } from '../models/GeneralError';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConsumptionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve account consumption metrics
     * Retrieves consumption metrics for Scale, Business, and Enterprise plan accounts. History begins at the time of upgrade.
     *
     * @param from Specify the start `date-time` for the consumption period.
     * The `date-time` value is rounded according to the specified `granularity`.
     * For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.
     * The specified `date-time` value must respect the specified granularity:
     * - For `hourly`, consumption metrics are limited to the last 168 hours.
     * - For `daily`, consumption metrics are limited to the last 60 days.
     * - For `monthly`, consumption metrics are limited to the past year.
     *
     * The consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.
     *
     * @param to Specify the end `date-time` for the consumption period.
     * The `date-time` value is rounded according to the specified granularity.
     * For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.
     * The specified `date-time` value must respect the specified granularity:
     * - For `hourly`, consumption metrics are limited to the last 168 hours.
     * - For `daily`, consumption metrics are limited to the last 60 days.
     * - For `monthly`, consumption metrics are limited to the past year.
     *
     * @param granularity Specify the granularity of consumption metrics.
     * Hourly, daily, and monthly metrics are available for the last 168 hours, 60 days,
     * and 1 year, respectively.
     *
     * @param orgId Specify the organization for which the consumption metrics should be returned.
     * If this parameter is not provided, the endpoint will return the metrics for the
     * authenticated user's account.
     *
     * @param includeV1Metrics Include metrics utilized in previous pricing models.
     * - **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour
     * for each project, which never decreases.
     *
     * @returns ConsumptionHistoryPerAccountResponse Returned consumption metrics for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getConsumptionHistoryPerAccount(
        from: string,
        to: string,
        granularity: ConsumptionHistoryGranularity,
        orgId?: string,
        includeV1Metrics?: boolean,
    ): CancelablePromise<ConsumptionHistoryPerAccountResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/consumption_history/account',
            query: {
                'from': from,
                'to': to,
                'granularity': granularity,
                'org_id': orgId,
                'include_v1_metrics': includeV1Metrics,
            },
            errors: {
                403: `This endpoint is not available. It is only supported for Scale, Business, and Enterprise plan accounts.`,
                404: `Account is not a member of the organization specified by \`org_id\`.`,
                406: `The specified \`date-time\` range is outside the boundaries of the specified \`granularity\`.
                Adjust your \`from\` and \`to\` values or select a different \`granularity\`.
                `,
                429: `Too many requests`,
            },
        });
    }
    /**
     * Retrieve project consumption metrics
     * Retrieves consumption metrics for Scale, Business, and Enterprise plan projects. History begins at the time of upgrade.
     * Issuing a call to this API does not wake a project's compute endpoint.
     *
     * @param from Specify the start `date-time` for the consumption period.
     * The `date-time` value is rounded according to the specified `granularity`.
     * For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.
     * The specified `date-time` value must respect the specified `granularity`:
     * - For `hourly`, consumption metrics are limited to the last 168 hours.
     * - For `daily`, consumption metrics are limited to the last 60 days.
     * - For `monthly`, consumption metrics are limited to the last year.
     *
     * The consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.
     *
     * @param to Specify the end `date-time` for the consumption period.
     * The `date-time` value is rounded according to the specified granularity.
     * For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.
     * The specified `date-time` value must respect the specified `granularity`:
     * - For `hourly`, consumption metrics are limited to the last 168 hours.
     * - For `daily`, consumption metrics are limited to the last 60 days.
     * - For `monthly`, consumption metrics are limited to the last year.
     *
     * @param granularity Specify the granularity of consumption metrics.
     * Hourly, daily, and monthly metrics are available for the last 168 hours, 60 days,
     * and 1 year, respectively.
     *
     * @param cursor Specify the cursor value from the previous response to get the next batch of projects.
     * @param limit Specify a value from 1 to 100 to limit number of projects in the response.
     * @param projectIds Specify a list of project IDs to filter the response.
     * If omitted, the response will contain all projects.
     * A list of project IDs can be specified as an array of parameter values or as a comma-separated list in a single parameter value.
     * - As an array of parameter values: `project_ids=cold-poetry-09157238%20&project_ids=quiet-snow-71788278`
     * - As a comma-separated list in a single parameter value: `project_ids=cold-poetry-09157238,quiet-snow-71788278`
     *
     * @param orgId Specify the organization for which the project consumption metrics should be returned.
     * If this parameter is not provided, the endpoint will return the metrics for the
     * authenticated user's projects.
     *
     * @param includeV1Metrics Include metrics utilized in previous pricing models.
     * - **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour,
     * which never decreases.
     *
     * @returns any Returned project consumption metrics for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getConsumptionHistoryPerProject(
        from: string,
        to: string,
        granularity: ConsumptionHistoryGranularity,
        cursor?: string,
        limit: number = 10,
        projectIds?: Array<string>,
        orgId?: string,
        includeV1Metrics?: boolean,
    ): CancelablePromise<(ConsumptionHistoryPerProjectResponse & PaginationResponse) | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/consumption_history/projects',
            query: {
                'cursor': cursor,
                'limit': limit,
                'project_ids': projectIds,
                'from': from,
                'to': to,
                'granularity': granularity,
                'org_id': orgId,
                'include_v1_metrics': includeV1Metrics,
            },
            errors: {
                403: `This endpoint is not available. It is only supported with Scale, Business, and Enterprise plan accounts.`,
                404: `Account is not a member of the organization specified by \`org_id\`.`,
                406: `The specified \`date-time\` range is outside the boundaries of the specified \`granularity\`.
                Adjust your \`from\` and \`to\` values or select a different \`granularity\`.
                `,
                429: `Too many requests`,
            },
        });
    }
}
