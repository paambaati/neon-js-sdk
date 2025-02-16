/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityAuthProviderProjectOwnedBy } from './IdentityAuthProviderProjectOwnedBy';
import type { IdentityAuthProviderProjectTransferStatus } from './IdentityAuthProviderProjectTransferStatus';
export type IdentityIntegration = {
    auth_provider: string;
    auth_provider_project_id: string;
    branch_id: string;
    db_name: string;
    created_at: string;
    owned_by: IdentityAuthProviderProjectOwnedBy;
    transfer_status?: IdentityAuthProviderProjectTransferStatus;
    jwks_url: string;
};

