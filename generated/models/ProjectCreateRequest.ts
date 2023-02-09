/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PgSettingsData } from './PgSettingsData';
import type { PgVersion } from './PgVersion';
import type { ProjectSettings } from './ProjectSettings';

export type ProjectCreateRequest = {
    project: {
        settings?: ProjectSettings;
        name?: string;
        autoscaling_limit_min_cu?: number;
        autoscaling_limit_max_cu?: number;
        provisioner?: 'k8s-pod' | 'k8s-neonvm' | 'docker';
        region_id?: string;
        default_endpoint_settings?: PgSettingsData;
        pg_version?: PgVersion;
        store_passwords?: boolean;
    };
};

