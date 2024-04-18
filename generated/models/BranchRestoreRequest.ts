/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BranchRestoreRequest = {
    /**
     * The `branch_id` of the restore source branch.
     * If `source_timestamp` and `source_lsn` are omitted, the branch will be restored to head.
     * If `source_branch_id` is equal to the branch's id, `source_timestamp` or `source_lsn` is required.
     *
     */
    source_branch_id: string;
    /**
     * A Log Sequence Number (LSN) on the source branch. The branch will be restored with data from this LSN.
     *
     */
    source_lsn?: string;
    /**
     * A timestamp identifying a point in time on the source branch. The branch will be restored with data starting from this point in time.
     * The timestamp must be provided in ISO 8601 format; for example: `2024-02-26T12:00:00Z`.
     *
     */
    source_timestamp?: string;
    /**
     * If not empty, the previous state of the branch will be saved to a branch with this name.
     * If the branch has children or the `source_branch_id` is equal to the branch id, this field is required. All existing child branches will be moved to the newly created branch under the name `preserve_under_name`.
     *
     */
    preserve_under_name?: string;
};

