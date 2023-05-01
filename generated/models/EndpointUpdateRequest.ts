/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputeUnit } from './ComputeUnit';
import type { EndpointPoolerMode } from './EndpointPoolerMode';
import type { EndpointSettingsData } from './EndpointSettingsData';
import type { Provisioner } from './Provisioner';
import type { SuspendTimeoutSeconds } from './SuspendTimeoutSeconds';

export type EndpointUpdateRequest = {
    endpoint: {
        /**
         * The destination branch ID. The destination branch must not have an exsiting read-write endpoint.
         *
         */
        branch_id?: string;
        /**
         * The minimum number of CPU units
         *
         */
        autoscaling_limit_min_cu?: ComputeUnit;
        /**
         * The maximum number of CPU units
         *
         */
        autoscaling_limit_max_cu?: ComputeUnit;
        provisioner?: Provisioner;
        settings?: EndpointSettingsData;
        /**
         * Whether to enable connection pooling for the compute endpoint
         *
         */
        pooler_enabled?: boolean;
        pooler_mode?: EndpointPoolerMode;
        /**
         * Whether to restrict connections to the compute endpoint
         *
         */
        disabled?: boolean;
        /**
         * NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.
         *
         */
        passwordless_access?: boolean;
        suspend_timeout_seconds?: SuspendTimeoutSeconds;
    };
};

