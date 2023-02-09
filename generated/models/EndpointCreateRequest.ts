/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointPoolerMode } from './EndpointPoolerMode';
import type { EndpointSettingsData } from './EndpointSettingsData';
import type { EndpointType } from './EndpointType';

export type EndpointCreateRequest = {
    endpoint: {
        branch_id: string;
        /**
         * Only the project region_id is allowed for now
         *
         */
        region_id?: string;
        type: EndpointType;
        settings?: EndpointSettingsData;
        autoscaling_limit_min_cu?: number;
        autoscaling_limit_max_cu?: number;
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

