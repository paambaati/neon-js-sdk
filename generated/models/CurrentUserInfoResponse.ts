/* generated using openapi-typescript-codegen -- do no edit */
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
    billing_account: BillingAccount;
    auth_accounts: Array<CurrentUserAuthAccount>;
    email: string;
    id: string;
    image: string;
    login: string;
    name: string;
    projects_limit: number;
    branches_limit: number;
    max_autoscaling_limit: ComputeUnit;
    compute_seconds_limit?: number;
    plan: string;
};

