/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllowedIps } from './AllowedIps';
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
};

