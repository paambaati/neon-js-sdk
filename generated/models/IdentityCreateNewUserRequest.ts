/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentitySupportedAuthProvider } from './IdentitySupportedAuthProvider';
export type IdentityCreateNewUserRequest = {
    project_id: string;
    auth_provider: IdentitySupportedAuthProvider;
    email: string;
    name?: string;
};

