/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PgSettingsData } from './PgSettingsData';
import type { ProjectSettingsData } from './ProjectSettingsData';

export type ProjectUpdateRequest = {
    project: {
        settings?: ProjectSettingsData;
        name?: string;
        default_endpoint_settings?: PgSettingsData;
        /**
         * The number of seconds to retain PITR backup history for this project. Defaults to 7 days
         *
         */
        history_retention_seconds?: number;
    };
};

