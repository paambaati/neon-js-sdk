/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectConsumptionNew = {
    /**
     * The project ID
     * @deprecated
     */
    id: string;
    /**
     * The project ID
     */
    project_id: string;
    /**
     * Id of the consumption period, used to reference with `previous_period_id` field
     */
    period_id: string;
    /**
     * Bytes-Hour. Project consumed that much storage hourly during the billing period. The value has some lag.
     * The value is reset at the beginning of each billing period.
     *
     */
    data_storage_bytes_hour: number;
    /**
     * Timestamp of the last update of `data_storage_bytes_hour` field
     *
     */
    data_storage_bytes_hour_updated_at?: string;
    /**
     * Bytes. Current space occupied by project in the storage. The value has some lag.
     *
     */
    synthetic_storage_size: number;
    /**
     * Timestamp of the last update of `synthetic_storage_size` field
     *
     */
    synthetic_storage_size_updated_at?: string;
    /**
     * Bytes. Egress traffic from the Neon cloud to the client for given project over the billing period.
     * Includes deleted endpoints. The value has some lag. The value is reset at the beginning of each billing period.
     *
     */
    data_transfer_bytes: number;
    /**
     * Timestamp of the last update of `data_transfer_bytes` field
     *
     */
    data_transfer_bytes_updated_at?: string;
    /**
     * Bytes. Amount of WAL that travelled through storage for given project across all branches.
     * The value has some lag. The value is reset at the beginning of each billing period.
     *
     */
    written_data_bytes: number;
    /**
     * Timestamp of the last update of `written_data_bytes` field
     *
     */
    written_data_bytes_updated_at?: string;
    /**
     * Seconds. The number of CPU seconds used by the project's compute endpoints, including compute endpoints that have been deleted.
     * The value has some lag. The value is reset at the beginning of each billing period.
     * Examples:
     * 1. An endpoint that uses 1 CPU for 1 second is equal to `compute_time=1`.
     * 2. An endpoint that uses 2 CPUs simultaneously for 1 second is equal to `compute_time=2`.
     *
     */
    compute_time_seconds: number;
    /**
     * Timestamp of the last update of `compute_time_seconds` field
     *
     */
    compute_time_seconds_updated_at?: string;
    /**
     * Seconds. Control plane observed endpoints of this project being active this amount of wall-clock time.
     * The value has some lag.
     * The value is reset at the beginning of each billing period.
     *
     */
    active_time_seconds: number;
    /**
     * Timestamp of the last update of `active_time_seconds` field
     *
     */
    active_time_seconds_updated_at?: string;
    /**
     * A timestamp indicating when the period was last updated
     *
     */
    updated_at: string;
    /**
     * Start of the consumption period
     */
    period_start: string;
    /**
     * End of the consumption period
     */
    period_end: string | null;
    /**
     * `period_id` of the previous consumption period
     *
     */
    previous_period_id: string | null;
};

