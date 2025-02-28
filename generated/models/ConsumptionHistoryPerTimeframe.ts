/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConsumptionHistoryPerTimeframe = {
    /**
     * The specified start date-time for the reported consumption.
     *
     */
    timeframe_start: string;
    /**
     * The specified end date-time for the reported consumption.
     *
     */
    timeframe_end: string;
    /**
     * Seconds. The amount of time the compute endpoints have been active.
     *
     */
    active_time_seconds: number;
    /**
     * Seconds. The number of CPU seconds used by compute endpoints, including compute endpoints that have been deleted.
     *
     */
    compute_time_seconds: number;
    /**
     * Bytes. The amount of written data for all branches.
     *
     */
    written_data_bytes: number;
    /**
     * Bytes. The space occupied in storage. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches.
     *
     */
    synthetic_storage_size_bytes: number;
    /**
     * Bytes-Hour. The amount of storage consumed hourly.
     *
     */
    data_storage_bytes_hour?: number;
};

