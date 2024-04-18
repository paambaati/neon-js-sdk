/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingSubscriptionType } from './BillingSubscriptionType';
import type { InvitationCreateRequest } from './InvitationCreateRequest';
export type OrganizationCreateRequest = {
    organization: {
        /**
         * The organization name
         */
        name?: string;
        /**
         * Emails with roles to invite to the organization
         */
        invitations?: Array<InvitationCreateRequest>;
    };
    subscription_type: BillingSubscriptionType;
};

