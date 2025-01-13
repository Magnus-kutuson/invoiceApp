import { Component, inject, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeadlineComponent } from '../headline/headline.component';
import { Store } from '@ngrx/store';
import { invoiceActions } from '../Stores/actions';
import {  selectInvoice,selectInvoices } from '../Stores/reducer';
import { ActivatedRoute } from '@angular/router';
import { BadgeComponent } from '../badge/badge.component';
import { DeleteCardComponent } from '../delete-card/delete-card.component';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { FormsComponent } from '../forms/forms.component';







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
    DeleteCardComponent,
    CommonModule,
    FooterComponent,
    FormsComponent,
  ],
  templateUrl: './selected-invoice.component.html',
  styleUrl: './selected-invoice.component.css',
})
export class SelectedInvoiceComponent implements OnInit {
  invoiceDetails: any;
  invoices$: any = this.store.select(selectInvoices);
  deleteVisible: boolean = false;
  isFormVisible: boolean = false;

  routes: ActivatedRoute = inject(ActivatedRoute);

  constructor(private store: Store, private dataService: DataService) {}

  ngOnInit(): void {
    // this.store.dispatch(invoiceActions.findById({ id: this.routes.snapshot.params['id'] }));
    // this.store.dispatch(invoiceActions.load());
    const invoiceId = this.routes.snapshot.paramMap.get('id');
    this.invoices$.subscribe((invoices: any) => {
      this.invoiceDetails = invoices.find(
        (invoice: any) => invoice.id === invoiceId
      );
    });
    this.dataService.formVisible$.subscribe((visible) => {
      this.isFormVisible = visible;
    });
  }
  openDialog(): void {
    this.deleteVisible = true;
  }

  closeDialog(): void {
    this.deleteVisible = false;
  }

  toggleFormVisibility(): void {
    this.dataService.toggleFormVisibility();
  }
}
