/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExplainData } from './ExplainData';
import type { StatementData } from './StatementData';

export type StatementResult = {
    data?: StatementData;
    error?: string;
    explain_data?: Array<ExplainData>;
    query: string;
};

