/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PgSettingsData } from './PgSettingsData';
import type { ProjectSettings } from './ProjectSettings';

export type ProjectUpdateRequest = {
    project: {
        settings?: ProjectSettings;
        name?: string;
        default_endpoint_settings?: PgSettingsData;
    };
};

