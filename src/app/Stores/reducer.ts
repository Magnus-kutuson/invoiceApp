import { createFeature, createReducer, on } from "@ngrx/store";
import { initialInvoiceState } from '../invoice';
import { invoiceActions } from "./actions";

export const invoiceFeature = createFeature({
    name: "invoice",
    reducer: createReducer(
        initialInvoiceState,
        on(invoiceActions.load, (state) => ({ ...state, loading: true })),
        on(invoiceActions.loadSuccess, (state, { invoices }) => ({
            ...state,
            invoices,
            loading: false,
            error: null,        
        })),
        on(invoiceActions.loadFailure, (state, { error }) => ({
            ...state,
            loading: false,
            error,
        })),
        on(invoiceActions.findById, (state, { id }) => ({
            ...state,
            invoice: state.invoices.find((invoice) => invoice.id === id)  
        })),
    )
})
export const {selectError, selectLoading, selectInvoices, selectInvoice} = invoiceFeature;