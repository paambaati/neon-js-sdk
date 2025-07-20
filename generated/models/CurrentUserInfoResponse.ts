/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingAccount } from './BillingAccount';
import type { ComputeUnit } from './ComputeUnit';
import type { CurrentUserAuthAccount } from './CurrentUserAuthAccount';
export type CurrentUserInfoResponse = {
    /**
     * Control plane observes active endpoints of a user this amount of wall-clock time.
     *
     */
    active_seconds_limit: number;
    billing_account?: BillingAccount;
    auth_accounts: Array<CurrentUserAuthAccount>;
    email: string;
    id: string;
    image: string;
    /**
     * DEPRECATED. Use `email` field.
     *
     * @deprecated
     */
    login: string;
    name: string;
    last_name: string;
    projects_limit: number;
    branches_limit: number;
    max_autoscaling_limit: ComputeUnit;
    compute_seconds_limit?: number;
    plan: string;
};

