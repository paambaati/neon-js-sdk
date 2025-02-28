/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrentUserAuthAccount } from './CurrentUserAuthAccount';
import type { LinkedAuthAccount } from './LinkedAuthAccount';
export type CurrentUserInfoAuthResponse = {
    password_stored: boolean;
    auth_accounts: Array<CurrentUserAuthAccount>;
    linked_accounts: Array<LinkedAuthAccount>;
    provider: string;
};

