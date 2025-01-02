import { Component, OnInit, Signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BadgeComponent } from '../badge/badge.component';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { Store } from '@ngrx/store';
import { invoiceActions } from '../Stores/actions';
import { selectError, selectInvoices, selectLoading } from '../Stores/reducer';
import { ThemeChangerComponent } from '../theme-changer/theme-changer.component';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    HeaderComponent,
    BadgeComponent,
    HeadlineComponent,
    TextComponent,
    ThemeChangerComponent,
  ],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  data: any = this.store.selectSignal(selectInvoices);
  loadingInvoice: any = this.store.selectSignal(selectLoading);
  error: Signal<string | null> = this.store.selectSignal(selectError);
  isDarkMode: boolean = false; 

  constructor(private dataService: DataService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(invoiceActions.load());
    this.updateBodyClass();
  }
  updateBodyClass() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }

}