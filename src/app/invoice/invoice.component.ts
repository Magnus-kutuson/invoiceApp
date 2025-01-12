import { Component,  OnInit, Signal, HostListener, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BadgeComponent } from '../badge/badge.component';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { Store } from '@ngrx/store';
import { invoiceActions } from '../Stores/actions';
import { selectError, selectInvoices, selectLoading, selectStatuses } from '../Stores/reducer';
import { ThemeChangerComponent } from '../theme-changer/theme-changer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';
import { FooterComponent } from '../footer/footer.component';
import { DeleteCardComponent } from '../delete-card/delete-card.component';



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
    DeleteCardComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  data: any = this.store.selectSignal(selectInvoices);
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
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isFormVisible) return; 

    const targetElement = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.isFormVisible = false; 
    }
  }
}