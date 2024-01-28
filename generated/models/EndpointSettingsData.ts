/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PgbouncerSettingsData } from './PgbouncerSettingsData';
import type { PgSettingsData } from './PgSettingsData';

/**
 * A collection of settings for a compute endpoint
 */
export type EndpointSettingsData = {
    pg_settings?: PgSettingsData;
    pgbouncer_settings?: PgbouncerSettingsData;
};

