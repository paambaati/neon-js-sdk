/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The consumption quota of a project.
 * After the quota has been exceeded, it is impossible to use the project until either:
 * * Neon cloud resets the calculated consumption,
 * * or the user increases quota for the project.
 * The Neon cloud resets the quota in the beginning of the billing period.
 *
 * If the quota is not set, the project can use as many resources as needed.
 *
 */
export type ProjectSettingsQuota = {
    /**
     * The total amount of CPU seconds allowed to be spent by the endpoints of the project.
     *
     */
    cpu_quota_sec?: number;
};

