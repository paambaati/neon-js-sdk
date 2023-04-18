/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputeUnit } from './ComputeUnit';
import type { EndpointType } from './EndpointType';
import type { Provisioner } from './Provisioner';

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
    /**
     * Duration of inactivity in seconds after which endpoint will be
     * automatically suspended. Value `0` means use global default,
     * `-1` means never suspend. Maximum value is 24 hours in seconds.
     *
     */
    suspend_timeout_seconds?: number;
};

