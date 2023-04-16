/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DefaultEndpointSettings } from './DefaultEndpointSettings';
import type { PgVersion } from './PgVersion';
import type { ProjectOwnerData } from './ProjectOwnerData';
import type { ProjectSettingsData } from './ProjectSettingsData';
import type { Provisioner } from './Provisioner';

/**
 * Essential data about the project. Full data is available at the getProject endpoint.
 *
 */
export type ProjectListItem = {
    /**
     * The project ID
     *
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
     * Control plane observed endpoints of this project being active this amount of wall-clock time.
     *
     */
    active_time: number;
    /**
     * DEPRECATED, use data from the getProject endpoint instead.
     *
     * @deprecated
     */
    cpu_used_sec: number;
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
     * Experimental. Do not use this field yet.
     * The data storage size in bytes.
     *
     */
    synthetic_storage_size?: number;
    /**
     * DEPRECATED. Use `consumption_period_end` from the getProject endpoint instead.
     * A timestamp indicating when the project quota resets
     *
     * @deprecated
     */
    quota_reset_at?: string;
    owner_id: string;
    owner?: ProjectOwnerData;
};

