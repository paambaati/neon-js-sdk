/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchCreateRequestEndpointOptions } from './BranchCreateRequestEndpointOptions';
export type BranchCreateRequest = {
    endpoints?: Array<BranchCreateRequestEndpointOptions>;
    branch?: {
        /**
         * The `branch_id` of the parent branch. If omitted or empty, the branch will be created from the project's default branch.
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
         * The timestamp must be provided in ISO 8601 format; for example: `2024-02-26T12:00:00Z`.
         *
         */
        parent_timestamp?: string;
        /**
         * Whether the branch is protected
         *
         */
        protected?: boolean;
    };
};

