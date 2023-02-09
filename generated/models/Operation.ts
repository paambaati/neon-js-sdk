/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OperationAction } from './OperationAction';
import type { OperationStatus } from './OperationStatus';

export type Operation = {
    id: string;
    project_id: string;
    branch_id?: string;
    endpoint_id?: string;
    action: OperationAction;
    status: OperationStatus;
    error?: string;
    failures_count: number;
    retry_at?: string;
    created_at: string;
    updated_at: string;
};

