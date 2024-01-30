/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PaymentSourceBankCard = {
    /**
     * Last 4 digits of the card.
     *
     */
    last4: string;
    /**
     * Brand of credit card.
     *
     */
    brand?: 'amex' | 'diners' | 'discover' | 'jcb' | 'mastercard' | 'unionpay' | 'unknown' | 'visa';
    /**
     * Credit card expiration month
     *
     */
    exp_month?: number;
    /**
     * Credit card expiration year
     *
     */
    exp_year?: number;
};

