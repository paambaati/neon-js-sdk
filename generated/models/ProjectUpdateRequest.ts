/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultEndpointSettings } from './DefaultEndpointSettings';
import type { ProjectSettingsData } from './ProjectSettingsData';
export type ProjectUpdateRequest = {
    project: {
        settings?: ProjectSettingsData;
        /**
         * The project name
         */
        name?: string;
        default_endpoint_settings?: DefaultEndpointSettings;
        /**
         * The number of seconds to retain the point-in-time restore (PITR) backup history for this project.
         * The default is 604800 seconds (7 days).
         *
         */
        history_retention_seconds?: number;
    };
};

