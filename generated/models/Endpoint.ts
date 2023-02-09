/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointPoolerMode } from './EndpointPoolerMode';
import type { EndpointSettingsData } from './EndpointSettingsData';
import type { EndpointState } from './EndpointState';
import type { EndpointType } from './EndpointType';

export type Endpoint = {
    /**
     * Hostname to connect to.
     *
     */
    host: string;
    id: string;
    project_id: string;
    branch_id: string;
    autoscaling_limit_min_cu: number;
    autoscaling_limit_max_cu: number;
    region_id: string;
    type: EndpointType;
    current_state: EndpointState;
    pending_state?: EndpointState;
    settings: EndpointSettingsData;
    /**
     * Enable or disable connection pooling for this endpoint.
     */
    pooler_enabled: boolean;
    pooler_mode: EndpointPoolerMode;
    /**
     * Restrict any connections to this endpoint.
     */
    disabled: boolean;
    /**
     * Allow or restrict passwordless access to this endpoint.
     */
    passwordless_access: boolean;
    /**
     * Timestamp of the last detected activity of the endpoint.
     */
    last_active?: string;
    creation_source: string;
    created_at: string;
    updated_at: string;
    /**
     * DEPRECATED. Use the "host" property instead.
     *
     */
    proxy_host: string;
};

