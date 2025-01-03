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
        }))
    )
})

export const {selectError, selectLoading, selectInvoices} = invoiceFeature;