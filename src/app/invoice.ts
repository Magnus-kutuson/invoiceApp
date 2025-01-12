// Define interfaces for the Invoice system
export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: BadgeVariants[];
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

export type FieldProps = {
  type: string;
  name: string;
  id: string;
  class: string;
};

export type BadgeVariants = 'paid' | 'pending' | 'draft';


export interface InvoiceState {
  invoices: Invoice[];
  loading: boolean;
  error: string | null;
  invoice: Invoice | undefined;
  findById: Invoice | undefined;
  statuses: BadgeVariants[];
  fieldprops: [];
}

export const initialInvoiceState: InvoiceState = {
  invoices: [],
  loading: false,
  error: null,
  invoice: undefined,
  findById: undefined,
  statuses: [],
  fieldprops: [],
};
