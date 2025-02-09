/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify an explicit timeout in milliseconds to limit response delay.
 * After timing out, the incomplete list of project data fetched so far will be returned.
 * Projects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response.
 * If not specified, an implicit implementation defined timeout is chosen with the same behaviour as above
 *
 */
export type TimeoutParam = number;
