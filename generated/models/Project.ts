/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PgVersion } from './PgVersion';
import type { ProjectSettings } from './ProjectSettings';
import type { ProjectSettingsData } from './ProjectSettingsData';

export type Project = {
    id: string;
    platform_id: string;
    region_id: string;
    name: string;
    provisioner?: 'k8s-pod' | 'k8s-neonvm' | 'docker';
    default_endpoint_settings?: ProjectSettingsData;
    settings?: ProjectSettings;
    pg_version: PgVersion;
    proxy_host: string;
    /**
     * Value is in MiB.
     *
     */
    branch_logical_size_limit: number;
    store_passwords: boolean;
    /**
     * CPU seconds used by all the endpoints of the project, including deleted ones.
     * This value is reset at the beginning of each billing period.
     * Examples:
     * 1. An endpoint that uses 1 CPU for 1 second is equal to `cpu_used_sec=1`.
     * 2. An endpoint that uses 2 CPUs simultaneously for 1 second is equal to `cpu_used_sec=2`.
     *
     */
    cpu_used_sec: number;
    /**
     * If set, the project will be in maintenance mode from that time.
     *
     */
    maintenance_starts_at?: string;
    creation_source: string;
    created_at: string;
    updated_at: string;
    /**
     * Experimental. Do not use this field yet!
     * Data storage size in bytes.
     *
     */
    synthetic_storage_size?: number;
    quota_reset_at?: string;
};

