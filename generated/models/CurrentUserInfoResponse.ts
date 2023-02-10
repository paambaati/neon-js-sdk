/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrentUserAuthAccount } from './CurrentUserAuthAccount';

export type CurrentUserInfoResponse = {
    auth_accounts: Array<CurrentUserAuthAccount>;
    email: string;
    id: string;
    image: string;
    login: string;
    name: string;
    projects_limit: number;
    endpoints_limit: number;
    branches_limit: number;
    max_autoscaling_limit: number;
    compute_seconds_limit: number;
};

