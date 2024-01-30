/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProjectConsumption = {
    /**
     * The project ID
     */
    project_id: string;
    /**
     * The Id of the consumption period, used to reference the `previous_period_id` field.
     *
     */
    period_id: string;
    /**
     * Bytes-Hour. The amount of storage the project consumed during the billing period. Expect some lag in the reported value.
     * The value is reset at the beginning of each billing period.
     *
     */
    data_storage_bytes_hour: number;
    /**
     * The timestamp of the last update of the `data_storage_bytes_hour` field.
     *
     */
    data_storage_bytes_hour_updated_at?: string;
    /**
     * Bytes. The current space occupied by project in storage. Expect some lag in the reported value.
     *
     */
    synthetic_storage_size: number;
    /**
     * The timestamp of the last update of the `synthetic_storage_size` field.
     *
     */
    synthetic_storage_size_updated_at?: string;
    /**
     * Bytes. The egress traffic from the Neon cloud to the client for the project over the billing period.
     * Includes egress traffic for deleted endpoints. Expect some lag in the reported value. The value is reset at the beginning of each billing period.
     *
     */
    data_transfer_bytes: number;
    /**
     * Timestamp of the last update of `data_transfer_bytes` field
     *
     */
    data_transfer_bytes_updated_at?: string;
    /**
     * Bytes. The Amount of WAL that travelled through storage for given project for all branches.
     * Expect some lag in the reported value. The value is reset at the beginning of each billing period.
     *
     */
    written_data_bytes: number;
    /**
     * The timestamp of the last update of `written_data_bytes` field.
     *
     */
    written_data_bytes_updated_at?: string;
    /**
     * Seconds. The number of CPU seconds used by the project's compute endpoints, including compute endpoints that have been deleted.
     * Expect some lag in the reported value. The value is reset at the beginning of each billing period.
     * Examples:
     * 1. An endpoint that uses 1 CPU for 1 second is equal to `compute_time=1`.
     * 2. An endpoint that uses 2 CPUs simultaneously for 1 second is equal to `compute_time=2`.
     *
     */
    compute_time_seconds: number;
    /**
     * The timestamp of the last update of `compute_time_seconds` field.
     *
     */
    compute_time_seconds_updated_at?: string;
    /**
     * Seconds. The amount of time that compute endpoints in this project have been active.
     * Expect some lag in the reported value.
     *
     * The value is reset at the beginning of each billing period.
     *
     */
    active_time_seconds: number;
    /**
     * The timestamp of the last update of the `active_time_seconds` field.
     *
     */
    active_time_seconds_updated_at?: string;
    /**
     * A timestamp indicating when the period was last updated.
     *
     */
    updated_at: string;
    /**
     * The start of the consumption period.
     *
     */
    period_start: string;
    /**
     * The end of the consumption period.
     *
     */
    period_end: string | null;
    /**
     * The `period_id` of the previous consumption period.
     *
     */
    previous_period_id: string | null;
};

