/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputeUnit } from './ComputeUnit';
import type { PgSettingsData } from './PgSettingsData';
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
         * The minimum number of CPU units
         *
         */
        autoscaling_limit_min_cu?: ComputeUnit;
        /**
         * The maximum number of CPU units
         *
         */
        autoscaling_limit_max_cu?: ComputeUnit;
        provisioner?: Provisioner;
        /**
         * The region identifier. See [the documentation](https://neon.tech/docs/introduction/regions) for the list of supported regions.
         *
         */
        region_id?: string;
        default_endpoint_settings?: PgSettingsData;
        pg_version?: PgVersion;
        /**
         * Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.
         *
         */
        store_passwords?: boolean;
    };
};

