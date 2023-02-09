/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Endpoint type. Either "read_write" for read-write primary or "read_only" for read-only secondary.
 * "read_only" endpoints are not yet implemented.
 *
 */
export type EndpointType = 'read_only' | 'read_write';
