/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputeUnit } from './ComputeUnit';
import type { EndpointPoolerMode } from './EndpointPoolerMode';
import type { EndpointSettingsData } from './EndpointSettingsData';
import type { EndpointType } from './EndpointType';
import type { Provisioner } from './Provisioner';
import type { SuspendTimeoutSeconds } from './SuspendTimeoutSeconds';

export type EndpointCreateRequest = {
    endpoint: {
        /**
         * The ID of the branch the compute endpoint will be associated with
         *
         */
        branch_id: string;
        /**
         * The region where the compute endpoint will be created. Only the project's `region_id` is permitted.
         *
         */
        region_id?: string;
        type: EndpointType;
        settings?: EndpointSettingsData;
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

