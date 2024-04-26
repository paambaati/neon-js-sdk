/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Per-project consumption quota. If the quota is exceeded, all active computes
 * are automatically suspended and it will not be possible to start them with
 * an API method call or incoming proxy connections. The only exception is
 * `logical_size_bytes`, which is applied on per-branch basis, i.e., only the
 * compute on the branch that exceeds the `logical_size` quota will be suspended.
 *
 * Quotas are enforced based on per-project consumption metrics with the same names,
 * which are reset at the end of each billing period (the first day of the month).
 * Logical size is also an exception in this case, as it represents the total size
 * of data stored in a branch, so it is not reset.
 *
 * A zero or empty quota value means 'unlimited'.
 *
 */
export type ProjectQuota = {
    /**
     * The total amount of wall-clock time allowed to be spent by the project's compute endpoints.
     *
     */
    active_time_seconds?: number;
    /**
     * The total amount of CPU seconds allowed to be spent by the project's compute endpoints.
     *
     */
    compute_time_seconds?: number;
    /**
     * Total amount of data written to all of a project's branches.
     *
     */
    written_data_bytes?: number;
    /**
     * Total amount of data transferred from all of a project's branches using the proxy.
     *
     */
    data_transfer_bytes?: number;
    /**
     * Limit on the logical size of every project's branch.
     *
     */
    logical_size_bytes?: number;
};

