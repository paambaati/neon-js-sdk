/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Duration of inactivity in seconds after which the compute endpoint is
 * automatically suspended. The value `0` means use the default value.
 * The value `-1` means never suspend. The default value is `300` seconds (5 minutes).
 * The minimum value is `60` seconds (1 minute).
 * The maximum value is `604800` seconds (1 week). For more information, see
 * [Scale to zero configuration](https://neon.tech/docs/manage/endpoints#scale-to-zero-configuration).
 *
 */
export type SuspendTimeoutSeconds = number;
