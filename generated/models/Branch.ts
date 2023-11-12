/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BranchState } from './BranchState';

export type Branch = {
    /**
     * The branch ID. This value is generated when a branch is created. A `branch_id` value has a `br` prefix. For example: `br-small-term-683261`.
     *
     */
    id: string;
    /**
     * The ID of the project to which the branch belongs
     *
     */
    project_id: string;
    /**
     * The `branch_id` of the parent branch
     *
     */
    parent_id?: string;
    /**
     * The Log Sequence Number (LSN) on the parent branch from which this branch was created
     *
     */
    parent_lsn?: string;
    /**
     * The point in time on the parent branch from which this branch was created
     *
     */
    parent_timestamp?: string;
    /**
     * The branch name
     *
     */
    name: string;
    current_state: BranchState;
    pending_state?: BranchState;
    /**
     * The logical size of the branch, in bytes
     *
     */
    logical_size?: number;
    /**
     * The branch creation source
     *
     */
    creation_source: string;
    /**
     * Whether the branch is the project's primary branch
     *
     */
    primary: boolean;
    /**
     * CPU seconds used by all the endpoints of the branch, including deleted ones.
     * This value is reset at the beginning of each billing period.
     * Examples:
     * 1. A branch that uses 1 CPU for 1 second is equal to `cpu_used_sec=1`.
     * 2. A branch that uses 2 CPUs simultaneously for 1 second is equal to `cpu_used_sec=2`.
     *
     * @deprecated
     */
    cpu_used_sec: number;
    compute_time_seconds: number;
    active_time_seconds: number;
    written_data_bytes: number;
    data_transfer_bytes: number;
    /**
     * A timestamp indicating when the branch was created
     *
     */
    created_at: string;
    /**
     * A timestamp indicating when the branch was last updated
     *
     */
    updated_at: string;
    /**
     * A timestamp indicating when the branch was last reset
     *
     */
    last_reset_at?: string;
};

