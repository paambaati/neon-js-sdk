/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A maintenance window is a time period during which Neon may perform maintenance on the project's infrastructure.
 * During this time, the project's compute endpoints may be unavailable and existing connections can be
 * interrupted.
 *
 */
export type MaintenanceWindow = {
    /**
     * A list of weekdays when the maintenance window is active.
     * Encoded as ints, where 1 - Monday, and 7 - Sunday.
     *
     */
    weekdays: Array<number>;
    /**
     * Start time of the maintenance window, in the format of "HH:MM". Uses UTC.
     *
     */
    start_time: string;
    /**
     * End time of the maintenance window, in the format of "HH:MM". Uses UTC.
     *
     */
    end_time: string;
};

