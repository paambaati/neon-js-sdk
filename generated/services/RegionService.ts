/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveRegionsResponse } from '../models/ActiveRegionsResponse';
import type { GeneralError } from '../models/GeneralError';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RegionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List supported regions
     * Lists supported Neon regions
     *
     * @returns ActiveRegionsResponse The list of active regions
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getActiveRegions(): CancelablePromise<ActiveRegionsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/regions',
        });
    }
}
