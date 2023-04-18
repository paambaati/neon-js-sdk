/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The consumption quota of a project.
 * After the quota has been exceeded, it is impossible to use the project until either:
 * * Neon cloud resets the calculated consumption,
 * * or the user increases quota for the project.
 * The Neon cloud resets the quota at the beginning of the billing period.
 *
 * If the quota is not set, the project can use as many resources as needed.
 *
 */
export type ProjectQuota = {
    /**
     * The total amount of wall-clock time allowed to be spent by a project's compute endpoints.
     *
     */
    active_time_sec?: number;
    /**
     * The total amount of CPU seconds allowed to be spent by a project's compute endpoints.
     *
     */
    cpu_quota_sec?: number;
};

