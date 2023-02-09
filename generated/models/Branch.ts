/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BranchState } from './BranchState';

export type Branch = {
    id: string;
    project_id: string;
    parent_id?: string;
    parent_lsn?: string;
    parent_timestamp?: string;
    name: string;
    current_state: BranchState;
    pending_state?: BranchState;
    /**
     * Branch logical size in bytes
     */
    logical_size?: number;
    /**
     * Branch physical size in bytes
     */
    physical_size?: number;
    creation_source: string;
    primary: boolean;
    created_at: string;
    updated_at: string;
};

