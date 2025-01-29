/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorCode } from './ErrorCode';
/**
 * General Error
 */
export type GeneralError = {
    request_id?: string;
    code: ErrorCode;
    /**
     * Error message
     */
    message: string;
};

