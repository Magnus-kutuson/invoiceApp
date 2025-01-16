import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; 
import { catchError, map, of, switchMap } from 'rxjs'; 
import { DataService } from '../data.service';
import { invoiceActions } from './actions';



@Injectable()
export class InvoiceEffects {
    private dataService = inject(DataService);
    private actions$ = inject(Actions);
    
    loadInvoices$ = createEffect(() => this.actions$.pipe(
        ofType(invoiceActions.load),
        switchMap(() => this.dataService.getJSON().pipe(
            map(invoices => invoiceActions.loadSuccess({ invoices })),
            catchError(error => of(invoiceActions.loadFailure({ error })))
        ))
    ));
}
