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
     * The minimum number of Compute Units. The minimum value is `0.25`.
     * See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)
     * for more information.
     *
     */
    autoscaling_limit_min_cu?: ComputeUnit;
    /**
     * The maximum number of Compute Units.
     * See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)
     * for more information.
     *
     */
    autoscaling_limit_max_cu?: ComputeUnit;
    provisioner?: Provisioner;
    suspend_timeout_seconds?: SuspendTimeoutSeconds;
};

