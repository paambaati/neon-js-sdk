/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NeonAuthProviderProjectOwnedBy } from './NeonAuthProviderProjectOwnedBy';
import type { NeonAuthProviderProjectTransferStatus } from './NeonAuthProviderProjectTransferStatus';
export type NeonAuthIntegration = {
    auth_provider: string;
    auth_provider_project_id: string;
    branch_id: string;
    db_name: string;
    created_at: string;
    owned_by: NeonAuthProviderProjectOwnedBy;
    transfer_status?: NeonAuthProviderProjectTransferStatus;
    jwks_url: string;
};

