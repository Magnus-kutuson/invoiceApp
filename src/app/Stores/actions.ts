import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Invoice } from "../invoice";



export const invoiceActions = createActionGroup({
    source: "Invoice",
    events: {
        add: props<{ invoice: Invoice}>(),
        remove: props<{ invoice: Invoice}>(),
        update: props<{ invoice: Invoice}>(),
        load: emptyProps(),
        loadSuccess: props<{ invoices: Invoice[] }>(),
        loadFailure: props<{ error: string }>()
    },
});