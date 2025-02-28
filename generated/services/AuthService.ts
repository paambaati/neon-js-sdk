/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralError } from '../models/GeneralError';
import type { IdentityCreateAuthProviderSDKKeysRequest } from '../models/IdentityCreateAuthProviderSDKKeysRequest';
import type { IdentityCreateIntegrationRequest } from '../models/IdentityCreateIntegrationRequest';
import type { IdentityCreateIntegrationResponse } from '../models/IdentityCreateIntegrationResponse';
import type { IdentitySupportedAuthProvider } from '../models/IdentitySupportedAuthProvider';
import type { IdentityTransferAuthProviderProjectRequest } from '../models/IdentityTransferAuthProviderProjectRequest';
import type { IdentityTransferAuthProviderProjectResponse } from '../models/IdentityTransferAuthProviderProjectResponse';
import type { ListProjectIdentityIntegrationsResponse } from '../models/ListProjectIdentityIntegrationsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create Neon Auth integration
     * Creates a project on a third-party authentication provider's platform for use with Neon Auth.
     * Use this endpoint if the frontend integration flow can't be used.
     *
     * @param requestBody
     * @returns GeneralError General Error
     * @returns IdentityCreateIntegrationResponse Creates Neon Auth integration
     * @throws ApiError
     */
    public createProjectIdentityIntegration(
        requestBody: IdentityCreateIntegrationRequest,
    ): CancelablePromise<GeneralError | IdentityCreateIntegrationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/auth/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create Auth Provider SDK keys
     * Generates SDK or API Keys for the auth provider. These might be called different things depending
     * on the auth provider you're using, but are generally used for setting up the frontend and backend SDKs.
     *
     * @param requestBody
     * @returns GeneralError General Error
     * @returns IdentityCreateIntegrationResponse Creates Auth Provider SDK keys
     * @throws ApiError
     */
    public createProjectIdentityAuthProviderSdkKeys(
        requestBody: IdentityCreateAuthProviderSDKKeysRequest,
    ): CancelablePromise<GeneralError | IdentityCreateIntegrationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/auth/keys',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Transfer Neon-managed auth project to your own account
     * Transfer ownership of your Neon-managed auth project to your own auth provider account.
     *
     * @param requestBody
     * @returns IdentityTransferAuthProviderProjectResponse Transfer initiated. Follow the URL to complete the process in your auth provider's UI.
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public transferProjectIdentityAuthProviderProject(
        requestBody: IdentityTransferAuthProviderProjectRequest,
    ): CancelablePromise<IdentityTransferAuthProviderProjectResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/auth/transfer_ownership',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Lists active integrations with auth providers
     * @param projectId The Neon project ID
     * @returns ListProjectIdentityIntegrationsResponse Return management API keys metadata
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listProjectIdentityIntegrations(
        projectId: string,
    ): CancelablePromise<ListProjectIdentityIntegrationsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/auth/integrations',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Delete integration with auth provider
     * @param projectId The Neon project ID
     * @param authProvider The authentication provider name
     * @returns any Delete the integration with the authentication provider
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteProjectIdentityIntegration(
        projectId: string,
        authProvider: IdentitySupportedAuthProvider,
    ): CancelablePromise<any | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/auth/integration/{auth_provider}',
            path: {
                'project_id': projectId,
                'auth_provider': authProvider,
            },
        });
    }
}
