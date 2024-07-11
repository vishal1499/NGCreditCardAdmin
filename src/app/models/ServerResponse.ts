import { CreditCard } from './credit-card';
export interface ServerResponse{
    error: boolean;
    errorMsg: string;
    status: string;
    response: CreditCard[];
}