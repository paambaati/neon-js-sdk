/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentSourceBankCard } from './PaymentSourceBankCard';

export type PaymentSource = {
    /**
     * Type of payment source. E.g. "card".
     *
     */
    type: string;
    card?: PaymentSourceBankCard;
};

