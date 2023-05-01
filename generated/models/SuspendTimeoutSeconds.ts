/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Duration of inactivity in seconds after which endpoint will be
 * automatically suspended. Value `0` means use global default,
 * `-1` means never suspend. Maximum value is 1 week in seconds.
 *
 */
export type SuspendTimeoutSeconds = number;
