/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointPoolerMode } from './EndpointPoolerMode';
import type { EndpointSettingsData } from './EndpointSettingsData';

export type EndpointUpdateRequest = {
    endpoint: {
        /**
         * Destination branch identifier. The destination branch must not have an exsiting read-write endpoint.
         *
         */
        branch_id?: string;
        autoscaling_limit_min_cu?: number;
        autoscaling_limit_max_cu?: number;
        settings?: EndpointSettingsData;
        pooler_enabled?: boolean;
        pooler_mode?: EndpointPoolerMode;
        /**
         * Restrict any connections to this endpoint.
         */
        disabled?: boolean;
        /**
         * NOT IMPLEMENTED YET
         *
         */
        passwordless_access?: boolean;
    };
};

