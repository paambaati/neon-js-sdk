/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SnapshotScheduleItem = {
    /**
     * The frequency to take snapshots at; one of the following options:
     * - hourly
     * - daily
     * - weekly
     * - monthly
     * - yearly
     *
     */
    frequency: string;
    /**
     * The hour in the day to take a snapshot at (if applicable).
     *
     */
    hour?: number;
    /**
     * The day in the month/week to take a snapshot at (if applicable).
     *
     */
    day?: number;
    /**
     * The month in the year to take a snapshot at (if applicable).
     *
     */
    month?: number;
    /**
     * The time in seconds until snapshots created by this schedule are automatically deleted.
     * If not provided, these snapshots are retained indefinitely.
     *
     */
    retention_seconds?: number;
};

