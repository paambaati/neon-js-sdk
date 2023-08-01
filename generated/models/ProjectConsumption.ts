/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectConsumption = {
    /**
     * The project ID
     *
     */
    id: string;
    /**
     * Bytes-Hour. Project consumed that much storage hourly during the billing period. The value has some lag.
     * The value is reset at the beginning of each billing period.
     *
     */
    data_storage_bytes_hour: number;
    /**
     * The timestamp when the `data_storage_bytes_hour` value was last updated.
     *
     */
    data_storage_bytes_hour_updated_at?: string;
    /**
     * Bytes. Current space occupied by project in the storage. The value has some lag.
     *
     */
    synthetic_storage_size: number;
    /**
     * The timestamp when the `synthetic_storage_size` value was last updated.
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
     * The timestamp when the `data_transfer_bytes` value was last updated.
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
     * The timestamp when the `written_data_bytes` value was last updated.
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
     * The timestamp when the `compute_time_seconds` value was last updated.
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
     * The timestamp when the `active_time_seconds` value was last updated.
     *
     */
    active_time_seconds_updated_at?: string;
    /**
     * The most recent time when any endpoint of this project was active.
     *
     * Omitted when observed no actitivy for endpoints of this project.
     *
     */
    compute_last_active_at?: string;
    /**
     * A timestamp indicating when the project was last updated
     *
     */
    updated_at: string;
};

