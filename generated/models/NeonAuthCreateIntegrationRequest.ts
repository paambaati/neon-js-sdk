/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NeonAuthSupportedAuthProvider } from './NeonAuthSupportedAuthProvider';
export type NeonAuthCreateIntegrationRequest = {
    auth_provider: NeonAuthSupportedAuthProvider;
    project_id: string;
    branch_id: string;
    database_name?: string;
    /**
     * @deprecated
     */
    role_name?: string;
};

