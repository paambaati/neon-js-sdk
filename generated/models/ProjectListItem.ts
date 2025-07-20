/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultEndpointSettings } from './DefaultEndpointSettings';
import type { PgVersion } from './PgVersion';
import type { ProjectSettingsData } from './ProjectSettingsData';
import type { Provisioner } from './Provisioner';
/**
 * Essential data about the project. Full data is available at the getProject endpoint.
 *
 */
export type ProjectListItem = {
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
     * Control plane observed endpoints of this project being active this amount of wall-clock time.
     *
     */
    active_time: number;
    /**
     * DEPRECATED. Use data from the getProject endpoint instead.
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
     * The current space occupied by the project in storage, in bytes. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches in a project.
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
    /**
     * The most recent time when any endpoint of this project was active.
     *
     * Omitted when observed no activity for endpoints of this project.
     *
     */
    compute_last_active_at?: string;
    /**
     * Organization id if the project belongs to an organization.
     * Permissions for the project will be given to organization members as defined by the organization admins.
     * The permissions of the project do not depend on the user that created the project if a project belongs to an organization.
     *
     */
    org_id?: string;
    /**
     * Organization name if the project belongs to an organization.
     *
     */
    org_name?: string;
    /**
     * The number of seconds to retain the shared history for all branches in this project.
     *
     */
    history_retention_seconds?: number;
    /**
     * A timestamp indicating when HIPAA was enabled for this project
     */
    hipaa_enabled_at?: string;
};

