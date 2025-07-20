/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Per-project consumption quotas. If a quota is exceeded, all active computes
 * are automatically suspended and cannot be started via API calls or incoming connections.
 *
 * The exception is `logical_size_bytes`, which is enforced per branch.
 * If a branch exceeds its `logical_size_bytes` quota, computes can still be started,
 * but write operations will fail—allowing data to be deleted to free up space.
 * Computes on other branches are not affected.
 *
 * Setting `logical_size_bytes` overrides any lower value set by the `neon.max_cluster_size` Postgres setting.
 *
 * Quotas are enforced using per-project consumption metrics with the same names.
 * These metrics reset at the start of each billing period. `logical_size_bytes`
 * is also an exception—it reflects the total data stored in a branch and does not reset.
 *
 * A zero or empty quota value means “unlimited.”
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
     * If a branch exceeds its `logical_size_bytes` quota, computes can still be started,
     * but write operations will fail—allowing data to be deleted to free up space.
     * Computes on other branches are not affected.
     *
     * Setting `logical_size_bytes` overrides any lower value set by the `neon.max_cluster_size` Postgres setting.
     *
     */
    logical_size_bytes?: number;
};

