/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The branch’s state, indicating if it is initializing, ready for use, or archived.
 * * 'init' - the branch is being created but is not available for querying.
 * * 'ready' - the branch is fully operational and ready for querying. Expect normal query response times.
 * * 'archived' - the branch is stored in cost-effective archival storage. Expect slow query response times.
 *
 */
export type BranchState = string;
