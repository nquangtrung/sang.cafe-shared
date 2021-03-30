export interface IContract {
    uid: string;
    billPath: string;
    billId: string;
    customerId: string;
    itemId: number;
    agentId?: string;
    phoneNumber?: string;
    status: 'pending' | 'rejected' | 'confirmed';
    type: 'brokerage';
    createdAt: any;
    respondedAt: any;
}
export declare const ContractTypes: {
    BROKERAGE: string;
};
export declare const ContractStatus: {
    PENDING: string;
    REJECTED: string;
    CONFIRMED: string;
};