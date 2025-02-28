/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityProviderId } from './IdentityProviderId';
export type CurrentUserAuthAccount = {
    email: string;
    image: string;
    /**
     * DEPRECATED. Use `email` field.
     *
     * @deprecated
     */
    login: string;
    name: string;
    provider: IdentityProviderId;
};

