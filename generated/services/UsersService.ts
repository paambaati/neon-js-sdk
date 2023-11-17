/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrentUserInfoResponse } from '../models/CurrentUserInfoResponse';
import type { GeneralError } from '../models/GeneralError';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get current user details
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

}
