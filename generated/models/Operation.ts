/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationAction } from './OperationAction';
import type { OperationStatus } from './OperationStatus';
export type Operation = {
    /**
     * The operation ID
     */
    id: string;
    /**
     * The Neon project ID
     */
    project_id: string;
    /**
     * The branch ID
     */
    branch_id?: string;
    /**
     * The endpoint ID
     */
    endpoint_id?: string;
    action: OperationAction;
    status: OperationStatus;
    /**
     * The error that occured
     */
    error?: string;
    /**
     * The number of times the operation failed
     */
    failures_count: number;
    /**
     * A timestamp indicating when the operation was last retried
     */
    retry_at?: string;
    /**
     * A timestamp indicating when the operation was created
     */
    created_at: string;
    /**
     * A timestamp indicating when the operation status was last updated
     */
    updated_at: string;
    /**
     * The total duration of the operation in milliseconds
     */
    total_duration_ms: number;
};

