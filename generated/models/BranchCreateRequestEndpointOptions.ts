/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointType } from './EndpointType';

export type BranchCreateRequestEndpointOptions = {
    type: EndpointType;
    autoscaling_limit_min_cu?: number;
    autoscaling_limit_max_cu?: number;
};

