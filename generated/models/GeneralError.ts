/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorCode } from './ErrorCode';
/**
 * General Error.
 *
 * The request may or may not be safe to retry, depending on the HTTP method, response status code, and whether a response was received.
 *
 *
 * - If no response is returned from the API, a network error or timeout likely occurred.
 * - In some cases, the request may have reached the server and been successfully processed, but the response failed to reach the client. As a result, retrying non-idempotent requests can lead to unintended results.
 * The following HTTP methods are considered non-idempotent: POST, PATCH, DELETE, and PUT. Retrying these methods is generally **not safe**.
 * The following methods are considered idempotent: GET, HEAD, and OPTIONS. Retrying these methods is **safe** in the event of a network error or timeout.
 *
 * Any request that returns a `503 Service Unavailable` response is always safe to retry.
 *
 */
export type GeneralError = {
    /**
     * Unique identifier for the request, useful for debugging.
     * You can set this value manually by including an `X-Request-ID` header in the request. If not provided, the value will be generated automatically.
     *
     */
    request_id?: string;
    code: ErrorCode;
    /**
     * Error message
     */
    message: string;
};

