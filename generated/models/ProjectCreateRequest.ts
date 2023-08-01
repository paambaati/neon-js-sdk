/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputeUnit } from './ComputeUnit';
import type { DefaultEndpointSettings } from './DefaultEndpointSettings';
import type { PgVersion } from './PgVersion';
import type { ProjectSettingsData } from './ProjectSettingsData';
import type { Provisioner } from './Provisioner';

export type ProjectCreateRequest = {
    project: {
        settings?: ProjectSettingsData;
        /**
         * The project name
         */
        name?: string;
        branch?: {
            /**
             * The branch name. If not specified, the default branch name will be used.
             *
             */
            name?: string;
            /**
             * The role name. If not specified, the default role name will be used.
             *
             */
            role_name?: string;
            /**
             * The database name. If not specified, the default database name will be used.
             *
             */
            database_name?: string;
        };
        /**
         * DEPRECATED, use default_endpoint_settings.autoscaling_limit_min_cu instead.
         *
         * The minimum number of Compute Units. The minimum value is `0.25`.
         * See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)
         * for more information.
         *
         * @deprecated
         */
        autoscaling_limit_min_cu?: ComputeUnit;
        /**
         * DEPRECATED, use default_endpoint_settings.autoscaling_limit_max_cu instead.
         *
         * The maximum number of Compute Units. See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)
         * for more information.
         *
         * @deprecated
         */
        autoscaling_limit_max_cu?: ComputeUnit;
        provisioner?: Provisioner;
        /**
         * The region identifier. Refer to our [Regions](https://neon.tech/docs/introduction/regions) documentation for supported regions. Values are specified in this format: `aws-us-east-1`
         *
         */
        region_id?: string;
        default_endpoint_settings?: DefaultEndpointSettings;
        pg_version?: PgVersion;
        /**
         * Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.
         *
         */
        store_passwords?: boolean;
        /**
         * The number of seconds to retain the point-in-time restore (PITR) backup history for this project.
         * The default is 604800 seconds (7 days).
         *
         */
        history_retention_seconds?: number;
    };
};

