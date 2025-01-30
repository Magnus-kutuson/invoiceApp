import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { FilterComponent } from '../filter/filter.component';
import { FormsComponent } from '../forms/forms.component';
import { DataService } from '../../service/data.service';
import { Store } from '@ngrx/store';
import { selectFilteredInvoices } from '../../Stores/reducer';
import { Invoice } from '../../interface/invoice';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FilterComponent,
    HeadlineComponent,
    TextComponent,
    FormsComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private store: Store = inject(Store);
  filteredInvoices = this.store.selectSignal(selectFilteredInvoices);
  constructor(private dataService: DataService) {}

  toggleFormVisibility(): void {
    this.dataService.toggleFormVisibility();
  }
}
