/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NeonAuthDeleteDomainFromRedirectURIWhitelistItem } from './NeonAuthDeleteDomainFromRedirectURIWhitelistItem';
import type { NeonAuthSupportedAuthProvider } from './NeonAuthSupportedAuthProvider';
export type NeonAuthDeleteDomainFromRedirectURIWhitelistRequest = {
    auth_provider: NeonAuthSupportedAuthProvider;
    domains: Array<NeonAuthDeleteDomainFromRedirectURIWhitelistItem>;
};

