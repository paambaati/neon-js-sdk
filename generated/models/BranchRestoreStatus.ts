/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Could be `restored`, `finalized` or `detaching`.
 * A `restored` branch becomes permanently `finalized` when you call `finalizeRestoreBranch`
 * A `restored` or `finalized` branch may begin `detaching` as a one-time performance optimisation, after which it will continue in its original state
 *
 */
export type BranchRestoreStatus = string;
