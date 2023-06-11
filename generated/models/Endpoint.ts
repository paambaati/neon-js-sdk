/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputeUnit } from './ComputeUnit';
import type { EndpointPoolerMode } from './EndpointPoolerMode';
import type { EndpointSettingsData } from './EndpointSettingsData';
import type { EndpointState } from './EndpointState';
import type { EndpointType } from './EndpointType';
import type { Provisioner } from './Provisioner';
import type { SuspendTimeoutSeconds } from './SuspendTimeoutSeconds';

export type Endpoint = {
    /**
     * The hostname of the compute endpoint. This is the hostname specified when connecting to a Neon database.
     *
     */
    host: string;
    /**
     * The compute endpoint ID. Compute endpoint IDs have an `ep-` prefix. For example: `ep-little-smoke-851426`
     *
     */
    id: string;
    /**
     * The ID of the project to which the compute endpoint belongs
     *
     */
    project_id: string;
    /**
     * The ID of the branch that the compute endpoint is associated with
     *
     */
    branch_id: string;
    /**
     * The minimum number of Compute Units
     *
     */
    autoscaling_limit_min_cu: ComputeUnit;
    /**
     * The maximum number of Compute Units
     *
     */
    autoscaling_limit_max_cu: ComputeUnit;
    /**
     * The region identifier
     *
     */
    region_id: string;
    type: EndpointType;
    current_state: EndpointState;
    pending_state?: EndpointState;
    settings: EndpointSettingsData;
    /**
     * Whether connection pooling is enabled for the compute endpoint
     *
     */
    pooler_enabled: boolean;
    pooler_mode: EndpointPoolerMode;
    /**
     * Whether to restrict connections to the compute endpoint
     *
     */
    disabled: boolean;
    /**
     * Whether to permit passwordless access to the compute endpoint
     *
     */
    passwordless_access: boolean;
    /**
     * A timestamp indicating when the compute endpoint was last active
     *
     */
    last_active?: string;
    /**
     * The compute endpoint creation source
     *
     */
    creation_source: string;
    /**
     * A timestamp indicating when the compute endpoint was created
     *
     */
    created_at: string;
    /**
     * A timestamp indicating when the compute endpoint was last updated
     *
     */
    updated_at: string;
    /**
     * DEPRECATED. Use the "host" property instead.
     *
     */
    proxy_host: string;
    suspend_timeout_seconds: SuspendTimeoutSeconds;
    provisioner: Provisioner;
};

