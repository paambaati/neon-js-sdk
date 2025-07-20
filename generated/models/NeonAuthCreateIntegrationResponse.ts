/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NeonAuthSupportedAuthProvider } from './NeonAuthSupportedAuthProvider';
export type NeonAuthCreateIntegrationResponse = {
    auth_provider: NeonAuthSupportedAuthProvider;
    auth_provider_project_id: string;
    pub_client_key: string;
    secret_server_key: string;
    jwks_url: string;
    schema_name: string;
    table_name: string;
};

