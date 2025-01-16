import { createFeature, createReducer, on } from "@ngrx/store";
import { initialInvoiceState, FieldProps } from '../invoice';
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
            filteredInvoices: invoices,
            
        })),
        on(invoiceActions.loadFailure, (state, { error }) => ({
            ...state,
            loading: false,
            error,
        })),
        on(invoiceActions.findById, (state, { id }) => ({
            ...state,
            findById: state.invoices.find((invoice) => invoice.id === id)
        })),
        on(invoiceActions.remove, (state, { invoice }) => ({
            ...state,
            invoices: state.invoices.filter(
                (item) => item.id !== invoice.id
            ),
        })),
        on(invoiceActions.fieldProps, (state, { }) => ({
            ...state, 
            // FieldProps: state.invoices.
        })),
        on(invoiceActions.filterInvoices, (state, { statuses }) => ({
            ...state,
            filteredInvoices: statuses.length > 0 
                ? state.invoices.filter((invoice) => statuses.includes(invoice.status))
                : state.invoices
        })),
    ),
});
export const {selectError, selectLoading, selectInvoices, selectInvoice, selectFilteredInvoices} = invoiceFeature;