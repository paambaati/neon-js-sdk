/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BranchCreateRequestEndpointOptions } from './BranchCreateRequestEndpointOptions';

export type BranchCreateRequest = {
    endpoints?: Array<BranchCreateRequestEndpointOptions>;
    branch?: {
        /**
         * The `branch_id` of the parent branch
         *
         */
        parent_id?: string;
        /**
         * The branch name
         *
         */
        name?: string;
        /**
         * A Log Sequence Number (LSN) on the parent branch. The branch will be created with data from this LSN.
         *
         */
        parent_lsn?: string;
        /**
         * A timestamp identifying a point in time on the parent branch. The branch will be created with data starting from this point in time.
         *
         */
        parent_timestamp?: string;
    };
};

