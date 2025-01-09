import { Component, inject, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeadlineComponent } from '../headline/headline.component';
import { invoiceActions } from '../Stores/actions';
import { Store } from '@ngrx/store';
import { selectInvoice, selectInvoices } from '../Stores/reducer';
import { ActivatedRoute } from '@angular/router';
import { BadgeComponent } from '../badge/badge.component';





@Component({
  selector: 'app-selected-invoice',
  standalone: true,
  imports: [
    TextComponent,
    RouterModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    HeadlineComponent,
    BadgeComponent,
  ],
  templateUrl: './selected-invoice.component.html',
  styleUrl: './selected-invoice.component.css',
})
export class SelectedInvoiceComponent implements OnInit {
  invoiceDetails: any;
  invoices$: any = this.store.select(selectInvoices);

  routes: ActivatedRoute = inject(ActivatedRoute);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.store.dispatch(invoiceActions.findById({ id: this.routes.snapshot.params['id'] }));
    // this.store.dispatch(invoiceActions.load());
    const invoiceId = this.routes.snapshot.paramMap.get('id');
    this.invoices$.subscribe((invoices: any) => {
      this.invoiceDetails = invoices.find(
        (invoice: any) => invoice.id === invoiceId
      );
      console.log(this.invoiceDetails);
    });
  }

}
