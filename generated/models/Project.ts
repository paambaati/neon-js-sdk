/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultEndpointSettings } from './DefaultEndpointSettings';
import type { PgVersion } from './PgVersion';
import type { ProjectOwnerData } from './ProjectOwnerData';
import type { ProjectSettingsData } from './ProjectSettingsData';
import type { Provisioner } from './Provisioner';
export type Project = {
    /**
     * Bytes-Hour. Project consumed that much storage hourly during the billing period. The value has some lag.
     * The value is reset at the beginning of each billing period.
     *
     */
    data_storage_bytes_hour: number;
    /**
     * Bytes. Egress traffic from the Neon cloud to the client for given project over the billing period.
     * Includes deleted endpoints. The value has some lag. The value is reset at the beginning of each billing period.
     *
     */
    data_transfer_bytes: number;
    /**
     * Bytes. Amount of WAL that travelled through storage for given project across all branches.
     * The value has some lag. The value is reset at the beginning of each billing period.
     *
     */
    written_data_bytes: number;
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
     * Seconds. Control plane observed endpoints of this project being active this amount of wall-clock time.
     * The value has some lag.
     * The value is reset at the beginning of each billing period.
     *
     */
    active_time_seconds: number;
    /**
     * DEPRECATED, use compute_time instead.
     *
     * @deprecated
     */
    cpu_used_sec: number;
    /**
     * The project ID
     */
    id: string;
    /**
     * The cloud platform identifier. Currently, only AWS is supported, for which the identifier is `aws`.
     *
     */
    platform_id: string;
    /**
     * The region identifier
     *
     */
    region_id: string;
    /**
     * The project name
     *
     */
    name: string;
    provisioner: Provisioner;
    default_endpoint_settings?: DefaultEndpointSettings;
    settings?: ProjectSettingsData;
    pg_version: PgVersion;
    /**
     * The proxy host for the project. This value combines the `region_id`, the `platform_id`, and the Neon domain (`neon.tech`).
     *
     */
    proxy_host: string;
    /**
     * The logical size limit for a branch. The value is in MiB.
     *
     */
    branch_logical_size_limit: number;
    /**
     * The logical size limit for a branch. The value is in B.
     *
     */
    branch_logical_size_limit_bytes: number;
    /**
     * Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.
     *
     */
    store_passwords: boolean;
    /**
     * A timestamp indicating when project maintenance begins. If set, the project is placed into maintenance mode at this time.
     *
     */
    maintenance_starts_at?: string;
    /**
     * The project creation source
     *
     */
    creation_source: string;
    /**
     * The number of seconds to retain the shared history for all branches in this project.
     *
     */
    history_retention_seconds: number;
    /**
     * A timestamp indicating when the project was created
     *
     */
    created_at: string;
    /**
     * A timestamp indicating when the project was last updated
     *
     */
    updated_at: string;
    /**
     * The current space occupied by the project in storage, in bytes. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches in a project.
     *
     */
    synthetic_storage_size?: number;
    /**
     * A date-time indicating when Neon Cloud started measuring consumption for current consumption period.
     *
     */
    consumption_period_start: string;
    /**
     * A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period.
     *
     */
    consumption_period_end: string;
    /**
     * DEPRECATED. Use `consumption_period_end` from the getProject endpoint instead.
     * A timestamp indicating when the project quota resets.
     *
     * @deprecated
     */
    quota_reset_at?: string;
    owner_id: string;
    owner?: ProjectOwnerData;
    /**
     * The most recent time when any endpoint of this project was active.
     *
     * Omitted when observed no activity for endpoints of this project.
     *
     */
    compute_last_active_at?: string;
    org_id?: string;
    /**
     * A timestamp indicating when project update begins. If set, computes might experience a brief restart around this time.
     *
     */
    maintenance_scheduled_for?: string;
    /**
     * A timestamp indicating when HIPAA was enabled for this project
     */
    hipaa_enabled_at?: string;
};

