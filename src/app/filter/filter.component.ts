import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeadlineComponent } from '../headline/headline.component';
import { Store } from '@ngrx/store';
import { invoiceActions } from '../Stores/actions';
import { selectStatuses } from '../Stores/reducer';
import { Observable } from 'rxjs';






@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, HeadlineComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  dropdownOpen = false;
  statuses$: Observable<any[]> = this.store.select(selectStatuses);
 
  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.statuses$ = this.store.select(selectStatuses);

    this.statuses$.subscribe((statuses) => {
      this.store.dispatch(invoiceActions.statuses({ statuses }));
    })
  }

  items = [{ status: 'paid' }, { status: 'pending' }, { status: 'draft' }];

  filters = [
    { id: '1', title: 'Paid', value: 'paid', selected: false },
    { id: '2', title: 'Pending', value: 'pending', selected: false },
    { id: '3', title: 'Draft', value: 'draft', selected: false },
  ];
  // invoices: any;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getSelectedFilters() {
    return this.filters
      .filter((filter) => filter.selected)
      .map((filter) => filter.value);
  }

  get filteredItems() {
    const activeFilters = this.getSelectedFilters();

    if (activeFilters.length === 0) {
      return this.items;
    }

    return this.items.filter((item) => activeFilters.includes(item.status));
  }
}
