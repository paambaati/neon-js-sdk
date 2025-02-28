/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrentUserInfoResponse } from '../models/CurrentUserInfoResponse';
import type { EmptyResponse } from '../models/EmptyResponse';
import type { GeneralError } from '../models/GeneralError';
import type { OrganizationsResponse } from '../models/OrganizationsResponse';
import type { TransferProjectsToOrganizationRequest } from '../models/TransferProjectsToOrganizationRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve current user details
     * Retrieves information about the current Neon user account.
     *
     * @returns CurrentUserInfoResponse Returned information about the current user
     *
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getCurrentUserInfo(): CancelablePromise<CurrentUserInfoResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me',
        });
    }
    /**
     * Retrieve current user organizations list
     * Retrieves information about the current Neon user's organizations
     *
     * @returns OrganizationsResponse Returned information about the current user organizations
     *
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getCurrentUserOrganizations(): CancelablePromise<OrganizationsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me/organizations',
        });
    }
    /**
     * Transfer projects from personal account to organization
     * Transfers selected projects, identified by their IDs, from your personal account to a specified organization.
     *
     * @param requestBody
     * @returns EmptyResponse Projects successfully transferred from personal account to organization
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public transferProjectsFromUserToOrg(
        requestBody: TransferProjectsToOrganizationRequest,
    ): CancelablePromise<EmptyResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/me/projects/transfer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                406: `Transfer failed - the target organization has too many projects or its plan is incompatible with the source account. Reduce the number of projects or upgrade the target organization to increase its capacity.`,
                422: `One or more of the provided project IDs have GitHub or Vercel integrations installed. Transferring integration projects is currently not supported`,
            },
        });
    }
}
