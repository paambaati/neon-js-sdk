/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConsumptionHistoryPerTimeframe } from './ConsumptionHistoryPerTimeframe';
export type ConsumptionHistoryPerPeriod = {
    /**
     * The ID assigned to the specified billing period.
     */
    period_id: string;
    /**
     * The billing plan applicable during the billing period.
     */
    period_plan: string;
    /**
     * The start date-time of the billing period.
     *
     */
    period_start: string;
    /**
     * The end date-time of the billing period, available for the past periods only.
     *
     */
    period_end?: string;
    consumption: Array<ConsumptionHistoryPerTimeframe>;
};

