/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Features } from './Features';
export type OrganizationLimits = {
    limits: {
        active_time: number;
        max_projects: number;
        max_branches: number;
        max_autoscaling_cu: number;
        cpu_seconds: number;
        max_active_endpoints: number;
        max_read_only_endpoints: number;
        max_allowed_ips: number;
        max_monitoring_retention_hours: number;
        max_history_retention_seconds: number;
        max_compute_time_non_primary: number;
        min_autosuspend_seconds: number;
    };
    features: Features;
};

