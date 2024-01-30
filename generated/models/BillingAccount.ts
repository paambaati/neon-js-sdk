/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingSubscriptionType } from './BillingSubscriptionType';
import type { PaymentSource } from './PaymentSource';
export type BillingAccount = {
    payment_source: PaymentSource;
    subscription_type: BillingSubscriptionType;
    /**
     * The last time the quota was reset. Defaults to the date-time the account is created.
     *
     */
    quota_reset_at_last: string;
    /**
     * Billing email, to receive emails related to invoices and subscriptions.
     *
     */
    email: string;
    /**
     * Billing address city.
     *
     */
    address_city: string;
    /**
     * Billing address country.
     *
     */
    address_country: string;
    /**
     * Billing address line 1.
     *
     */
    address_line1: string;
    /**
     * Billing address line 2.
     *
     */
    address_line2: string;
    /**
     * Billing address postal code.
     *
     */
    address_postal_code: string;
    /**
     * Billing address state or region.
     *
     */
    address_state: string;
    /**
     * Orb user portal url
     *
     */
    orb_portal_url?: string;
};

