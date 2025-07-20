/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralError } from '../models/GeneralError';
import type { ListNeonAuthIntegrationsResponse } from '../models/ListNeonAuthIntegrationsResponse';
import type { ListNeonAuthOauthProvidersResponse } from '../models/ListNeonAuthOauthProvidersResponse';
import type { NeonAuthAddDomainToRedirectURIWhitelistRequest } from '../models/NeonAuthAddDomainToRedirectURIWhitelistRequest';
import type { NeonAuthAddOAuthProviderRequest } from '../models/NeonAuthAddOAuthProviderRequest';
import type { NeonAuthCreateAuthProviderSDKKeysRequest } from '../models/NeonAuthCreateAuthProviderSDKKeysRequest';
import type { NeonAuthCreateIntegrationRequest } from '../models/NeonAuthCreateIntegrationRequest';
import type { NeonAuthCreateIntegrationResponse } from '../models/NeonAuthCreateIntegrationResponse';
import type { NeonAuthCreateNewUserRequest } from '../models/NeonAuthCreateNewUserRequest';
import type { NeonAuthCreateNewUserResponse } from '../models/NeonAuthCreateNewUserResponse';
import type { NeonAuthDeleteDomainFromRedirectURIWhitelistRequest } from '../models/NeonAuthDeleteDomainFromRedirectURIWhitelistRequest';
import type { NeonAuthOauthProvider } from '../models/NeonAuthOauthProvider';
import type { NeonAuthOauthProviderId } from '../models/NeonAuthOauthProviderId';
import type { NeonAuthRedirectURIWhitelistResponse } from '../models/NeonAuthRedirectURIWhitelistResponse';
import type { NeonAuthSupportedAuthProvider } from '../models/NeonAuthSupportedAuthProvider';
import type { NeonAuthTransferAuthProviderProjectRequest } from '../models/NeonAuthTransferAuthProviderProjectRequest';
import type { NeonAuthTransferAuthProviderProjectResponse } from '../models/NeonAuthTransferAuthProviderProjectResponse';
import type { NeonAuthUpdateOAuthProviderRequest } from '../models/NeonAuthUpdateOAuthProviderRequest';
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
     * @returns NeonAuthCreateIntegrationResponse Creates Neon Auth integration
     * @throws ApiError
     */
    public createNeonAuthIntegration(
        requestBody: NeonAuthCreateIntegrationRequest,
    ): CancelablePromise<GeneralError | NeonAuthCreateIntegrationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/auth/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List domains in redirect_uri whitelist
     * Lists the domains in the redirect_uri whitelist for the specified project.
     *
     * @param projectId The Neon project ID
     * @returns NeonAuthRedirectURIWhitelistResponse Returned the domains in the redirect_uri whitelist
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listNeonAuthRedirectUriWhitelistDomains(
        projectId: string,
    ): CancelablePromise<NeonAuthRedirectURIWhitelistResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/auth/domains',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Add domain to redirect_uri whitelist
     * Adds a domain to the redirect_uri whitelist for the specified project.
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns GeneralError General Error
     * @returns any Added the domain to the redirect_uri whitelist
     * @throws ApiError
     */
    public addNeonAuthDomainToRedirectUriWhitelist(
        projectId: string,
        requestBody: NeonAuthAddDomainToRedirectURIWhitelistRequest,
    ): CancelablePromise<GeneralError | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/auth/domains',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete domain from redirect_uri whitelist
     * Deletes a domain from the redirect_uri whitelist for the specified project.
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns any Deleted the domain from the redirect_uri whitelist
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteNeonAuthDomainFromRedirectUriWhitelist(
        projectId: string,
        requestBody: NeonAuthDeleteDomainFromRedirectURIWhitelistRequest,
    ): CancelablePromise<any | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/auth/domains',
            path: {
                'project_id': projectId,
            },
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
     * @returns NeonAuthCreateIntegrationResponse Creates Auth Provider SDK keys
     * @throws ApiError
     */
    public createNeonAuthProviderSdkKeys(
        requestBody: NeonAuthCreateAuthProviderSDKKeysRequest,
    ): CancelablePromise<GeneralError | NeonAuthCreateIntegrationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/auth/keys',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create new auth user
     * Creates a new user in Neon Auth.
     * The user will be created in your neon_auth.users_sync table and automatically propagated to your auth project, whether Neon-managed or provider-owned.
     *
     * @param requestBody
     * @returns GeneralError General Error
     * @returns NeonAuthCreateNewUserResponse Creates new user
     * @throws ApiError
     */
    public createNeonAuthNewUser(
        requestBody: NeonAuthCreateNewUserRequest,
    ): CancelablePromise<GeneralError | NeonAuthCreateNewUserResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/auth/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete auth user
     * Deletes the auth user for the specified project.
     *
     * @param projectId The Neon project ID
     * @param authUserId The Neon user ID
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteNeonAuthUser(
        projectId: string,
        authUserId: string,
    ): CancelablePromise<GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/auth/users/{auth_user_id}',
            path: {
                'project_id': projectId,
                'auth_user_id': authUserId,
            },
        });
    }
    /**
     * Transfer Neon-managed auth project to your own account
     * Transfer ownership of your Neon-managed auth project to your own auth provider account.
     *
     * @param requestBody
     * @returns NeonAuthTransferAuthProviderProjectResponse Transfer initiated. Follow the URL to complete the process in your auth provider's UI.
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public transferNeonAuthProviderProject(
        requestBody: NeonAuthTransferAuthProviderProjectRequest,
    ): CancelablePromise<NeonAuthTransferAuthProviderProjectResponse | GeneralError> {
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
     * @returns ListNeonAuthIntegrationsResponse Return management API keys metadata
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listNeonAuthIntegrations(
        projectId: string,
    ): CancelablePromise<ListNeonAuthIntegrationsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/auth/integrations',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * List OAuth providers
     * Lists the OAuth providers for the specified project.
     *
     * @param projectId The Neon project ID
     * @returns ListNeonAuthOauthProvidersResponse Returns the OAuth providers for the Neon Auth
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listNeonAuthOauthProviders(
        projectId: string,
    ): CancelablePromise<ListNeonAuthOauthProvidersResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/auth/oauth_providers',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Add a OAuth provider
     * Adds a OAuth provider to the specified project.
     *
     * @param projectId The Neon project ID
     * @param requestBody
     * @returns NeonAuthOauthProvider The OAuth provider has been added to the project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public addNeonAuthOauthProvider(
        projectId: string,
        requestBody: NeonAuthAddOAuthProviderRequest,
    ): CancelablePromise<NeonAuthOauthProvider | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/auth/oauth_providers',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update OAuth provider
     * Updates a OAuth provider for the specified project.
     *
     * @param projectId The Neon project ID
     * @param oauthProviderId The OAuth provider ID
     * @param requestBody
     * @returns NeonAuthOauthProvider The OAuth provider has been added to the project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public updateNeonAuthOauthProvider(
        projectId: string,
        oauthProviderId: NeonAuthOauthProviderId,
        requestBody: NeonAuthUpdateOAuthProviderRequest,
    ): CancelablePromise<NeonAuthOauthProvider | GeneralError> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}',
            path: {
                'project_id': projectId,
                'oauth_provider_id': oauthProviderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete OAuth provider
     * Deletes a OAuth provider from the specified project.
     *
     * @param projectId The Neon project ID
     * @param oauthProviderId The OAuth provider ID
     * @returns any Deleted the OAuth provider from the project
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteNeonAuthOauthProvider(
        projectId: string,
        oauthProviderId: NeonAuthOauthProviderId,
    ): CancelablePromise<any | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}',
            path: {
                'project_id': projectId,
                'oauth_provider_id': oauthProviderId,
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
    public deleteNeonAuthIntegration(
        projectId: string,
        authProvider: NeonAuthSupportedAuthProvider,
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
