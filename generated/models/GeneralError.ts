/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorCode } from './ErrorCode';

/**
 * General Error
 */
export type GeneralError = {
    code: ErrorCode;
    /**
     * Description of error that happened
     */
    message: string;
};

