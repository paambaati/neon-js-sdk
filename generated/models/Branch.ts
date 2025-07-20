/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchRestoreStatus } from './BranchRestoreStatus';
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
     * The Log Sequence Number (LSN) on the parent branch from which this branch was created.
     * When restoring a branch using the [Restore branch](https://api-docs.neon.tech/reference/restoreprojectbranch) endpoint,
     * this value isn’t finalized until all operations related to the restore have completed successfully.
     *
     */
    parent_lsn?: string;
    /**
     * The point in time on the parent branch from which this branch was created.
     * When restoring a branch using the [Restore branch](https://api-docs.neon.tech/reference/restoreprojectbranch) endpoint,
     * this value isn’t finalized until all operations related to the restore have completed successfully.
     * After all the operations completed, this value might stay empty.
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
     * A UTC timestamp indicating when the `current_state` began
     *
     */
    state_changed_at: string;
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
     * DEPRECATED. Use `default` field.
     * Whether the branch is the project's primary branch
     *
     * @deprecated
     */
    primary?: boolean;
    /**
     * Whether the branch is the project's default branch
     *
     */
    default: boolean;
    /**
     * Whether the branch is protected
     *
     */
    protected: boolean;
    /**
     * CPU seconds used by all of the branch's compute endpoints, including deleted ones.
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
     * The time-to-live (TTL) duration originally configured for the branch, in seconds. This read-only value represents the interval between the time `expires_at` was set and the expiration timestamp itself. It is preserved to ensure the same TTL duration is reapplied when resetting the branch from its parent, and only updates when a new `expires_at` value is set.
     *
     * This feature is currently in private preview. Get in touch with us to get access.
     *
     */
    ttl_interval_seconds?: number;
    /**
     * The timestamp when the branch is scheduled to expire and be automatically deleted. Must be set by the client following the [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) format with precision up to seconds (such as 2025-06-09T18:02:16Z). Deletion is performed by a background job and may not occur exactly at the specified time.
     *
     * This feature is currently in private preview. Get in touch with us to get access.
     *
     */
    expires_at?: string;
    /**
     * A timestamp indicating when the branch was last reset
     *
     */
    last_reset_at?: string;
    /**
     * The resolved user model that contains details of the user/org/integration/api_key used for branch creation. This field is filled only in listing/get/create/get/update/delete methods, if it is empty when calling other handlers, it does not mean that it is empty in the system.
     *
     */
    created_by?: {
        /**
         * The name of the user.
         */
        name?: string;
        /**
         * The URL to the user's avatar image.
         */
        image?: string;
    };
    /**
     * The source of initialization for the branch. Valid values are `schema-only` and `parent-data` (default).
     * * `schema-only` - creates a new root branch containing only the schema. Use `parent_id` to specify the source branch. Optionally, you can provide `parent_lsn` or `parent_timestamp` to branch from a specific point in time or LSN. These fields define which branch to copy the schema from and at what point—they do not establish a parent-child relationship between the `parent_id` branch and the new schema-only branch.
     * * `parent-data` - creates the branch with both schema and data from the parent.
     *
     */
    init_source?: string;
    restore_status?: BranchRestoreStatus;
    /**
     * ID of the snapshot that was the restore source for this branch
     *
     */
    restored_from?: string;
};

