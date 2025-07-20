/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationValueData } from './AnnotationValueData';
import type { ComputeUnit } from './ComputeUnit';
import type { DefaultEndpointSettings } from './DefaultEndpointSettings';
import type { PgVersion } from './PgVersion';
import type { ProjectSettingsData } from './ProjectSettingsData';
import type { Provisioner } from './Provisioner';
export type ProjectCreateRequest = {
    project: {
        settings?: ProjectSettingsData;
        /**
         * The project name. If not specified, the name will be identical to the generated project ID
         */
        name?: string;
        branch?: {
            /**
             * The default branch name. If not specified, the default branch name, `main`, will be used.
             *
             */
            name?: string;
            /**
             * The role name. If not specified, the default role name, `{database_name}_owner`, will be used.
             *
             */
            role_name?: string;
            /**
             * The database name. If not specified, the default database name, `neondb`, will be used.
             *
             */
            database_name?: string;
            /**
             * The annotations for the branch.
             *
             */
            annotations?: AnnotationValueData;
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
         * The number of seconds to retain the shared history for all branches in this project.
         * The default is 1 day (86400 seconds).
         *
         */
        history_retention_seconds?: number;
        /**
         * Organization id in case the project created belongs to an organization.
         * If not present, project is owned by a user and not by org.
         *
         */
        org_id?: string;
    };
};

