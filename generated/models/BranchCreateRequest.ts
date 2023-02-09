/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BranchCreateRequestEndpointOptions } from './BranchCreateRequestEndpointOptions';

export type BranchCreateRequest = {
    endpoints?: Array<BranchCreateRequestEndpointOptions>;
    branch?: {
        parent_id?: string;
        name?: string;
        parent_lsn?: string;
        parent_timestamp?: string;
    };
};

