import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Invoice, FieldProps, BadgeVariants } from '../invoice';



export const invoiceActions = createActionGroup({
  source: 'Invoice',
  events: {
    add: props<{ invoice: Invoice }>(),
    remove: props<{ invoice: Invoice }>(),
    update: props<{ invoice: Invoice }>(),
    load: emptyProps(),
    loadSuccess: props<{ invoices: Invoice[] }>(),
    loadFailure: props<{ error: string }>(),
    findById: props<{ id: string }>(),
    clear: emptyProps(),
    FieldProps: props<{ fieldProps: FieldProps }>(),
    filterInvoices: props<{ statuses: string[]}>()
  },
});

