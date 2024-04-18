/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiKeyCreateRequest } from '../models/ApiKeyCreateRequest';
import type { ApiKeyCreateResponse } from '../models/ApiKeyCreateResponse';
import type { ApiKeyRevokeResponse } from '../models/ApiKeyRevokeResponse';
import type { ApiKeysListResponseItem } from '../models/ApiKeysListResponseItem';
import type { GeneralError } from '../models/GeneralError';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApiKeyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of API keys
     * Retrieves the API keys for your Neon account.
     * The response does not include API key tokens. A token is only provided when creating an API key.
     * API keys can also be managed in the Neon Console.
     * For more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).
     *
     * @returns ApiKeysListResponseItem Returned the API keys for the Neon account
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listApiKeys(): CancelablePromise<Array<ApiKeysListResponseItem> | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api_keys',
        });
    }
    /**
     * Create an API key
     * Creates an API key.
     * The `key_name` is a user-specified name for the key.
     * This method returns an `id` and `key`. The `key` is a randomly generated, 64-bit token required to access the Neon API.
     * API keys can also be managed in the Neon Console.
     * See [Manage API keys](https://neon.tech/docs/manage/api-keys/).
     *
     * @param requestBody
     * @returns ApiKeyCreateResponse Created an API key
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public createApiKey(
        requestBody: ApiKeyCreateRequest,
    ): CancelablePromise<ApiKeyCreateResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api_keys',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Revoke an API key
     * Revokes the specified API key.
     * An API key that is no longer needed can be revoked.
     * This action cannot be reversed.
     * You can obtain `key_id` values by listing the API keys for your Neon account.
     * API keys can also be managed in the Neon Console.
     * See [Manage API keys](https://neon.tech/docs/manage/api-keys/).
     *
     * @param keyId The API key ID
     * @returns ApiKeyRevokeResponse Revoked the specified API key
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public revokeApiKey(
        keyId: number,
    ): CancelablePromise<ApiKeyRevokeResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api_keys/{key_id}',
            path: {
                'key_id': keyId,
            },
        });
    }
}
