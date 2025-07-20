/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllowedIps } from './AllowedIps';
import type { MaintenanceWindow } from './MaintenanceWindow';
import type { PreloadLibraries } from './PreloadLibraries';
import type { ProjectAuditLogLevel } from './ProjectAuditLogLevel';
import type { ProjectQuota } from './ProjectQuota';
export type ProjectSettingsData = {
    quota?: ProjectQuota;
    allowed_ips?: AllowedIps;
    /**
     * Sets wal_level=logical for all compute endpoints in this project.
     * All active endpoints will be suspended.
     * Once enabled, logical replication cannot be disabled.
     *
     */
    enable_logical_replication?: boolean;
    maintenance_window?: MaintenanceWindow;
    /**
     * When set, connections from the public internet
     * are disallowed. This supersedes the AllowedIPs list.
     * This parameter is under active development and its semantics may change in the future.
     *
     */
    block_public_connections?: boolean;
    /**
     * When set, connections using VPC endpoints are disallowed.
     * This parameter is under active development and its semantics may change in the future.
     *
     */
    block_vpc_connections?: boolean;
    audit_log_level?: ProjectAuditLogLevel;
    hipaa?: boolean;
    preload_libraries?: PreloadLibraries;
};

