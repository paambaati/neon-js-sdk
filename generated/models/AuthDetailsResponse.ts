/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuthDetailsResponse = {
    account_id: string;
    auth_method: 'keycloak' | 'session_cookie' | 'api_key_user' | 'api_key_org' | 'oauth';
    auth_data?: string;
};

