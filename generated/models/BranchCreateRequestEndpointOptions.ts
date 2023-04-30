/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputeUnit } from './ComputeUnit';
import type { EndpointType } from './EndpointType';
import type { Provisioner } from './Provisioner';
import type { SuspendTimeoutSeconds } from './SuspendTimeoutSeconds';

export type BranchCreateRequestEndpointOptions = {
    type: EndpointType;
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
    suspend_timeout_seconds?: SuspendTimeoutSeconds;
};

