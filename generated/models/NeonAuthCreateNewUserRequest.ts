/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NeonAuthSupportedAuthProvider } from './NeonAuthSupportedAuthProvider';
export type NeonAuthCreateNewUserRequest = {
    project_id: string;
    auth_provider: NeonAuthSupportedAuthProvider;
    email: string;
    name?: string;
};

