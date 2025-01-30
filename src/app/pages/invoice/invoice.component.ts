import { Component, OnInit, Signal, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../component/header/header.component';
import { BadgeComponent } from '../../component/badge/badge.component';
import { HeadlineComponent } from '../../component/headline/headline.component';
import { TextComponent } from '../../component/text/text.component';
import { Store } from '@ngrx/store';
import { invoiceActions } from '../../Stores/actions';
import {
  selectError,
  selectFilteredInvoices,
  selectInvoices,
  selectLoading,
} from '../../Stores/reducer';
import { ThemeChangerComponent } from '../../component/theme-changer/theme-changer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsComponent } from '../../component/forms/forms.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { DeleteCardComponent } from '../../component/delete-card/delete-card.component';

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
    RouterLink,
    RouterLinkActive,
    FormsComponent,
    FooterComponent,
    DeleteCardComponent,
  ],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  data = this.store.selectSignal(selectFilteredInvoices);
  loadingInvoice: any = this.store.selectSignal(selectLoading);
  error: Signal<string | null> = this.store.selectSignal(selectError);
  isDarkMode: boolean = false;
  isFormVisible: boolean = false;

  constructor(
    private dataService: DataService,
    private store: Store,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.store.dispatch(invoiceActions.load());

    this.dataService.formVisible$.subscribe((visible) => {
      this.isFormVisible = visible;
    });
  }
}
