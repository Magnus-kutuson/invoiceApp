import { Component, inject, OnInit } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectInvoices } from '../Stores/reducer';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-card',
  standalone: true,
  imports: [HeadlineComponent, TextComponent, CommonModule],
  templateUrl: './delete-card.component.html',
  styleUrl: './delete-card.component.css',
})
export class DeleteCardComponent implements OnInit {
  invoiceDetails: any;
  invoices$: any = this.store.select(selectInvoices);
  deleteVisible: boolean = false;

  routes: ActivatedRoute = inject(ActivatedRoute);

  constructor(private store: Store, private dataService: DataService) {}

  ngOnInit(): void {
    const invoiceId = this.routes.snapshot.paramMap.get('id');
    this.invoices$.subscribe((invoices: any) => {
      this.invoiceDetails = invoices.find(
        (invoice: any) => invoice.id === invoiceId
      );
      console.log(this.invoiceDetails);
    });
  }

  openDialog(): void {
    this.deleteVisible = true;
  }

  closeDialog(): void {
    this.deleteVisible = false;
  }
}
