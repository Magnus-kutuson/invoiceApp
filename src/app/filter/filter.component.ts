import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeadlineComponent } from '../headline/headline.component';
import { Store } from '@ngrx/store';
import { invoiceActions } from '../Stores/actions';
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
  statuses$: Observable<any[]> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
   
  }

  items = [{ status: 'paid' }, { status: 'pending' }, { status: 'draft' }];

  statuses = { paid: false, pending: false, draft: false };

  filters = [
    { id: '1', title: 'Paid', value: 'paid', selected: false },
    { id: '2', title: 'Pending', value: 'pending', selected: false },
    { id: '3', title: 'Draft', value: 'draft', selected: false },
  ];
  // invoices: any;
  selectedStatus() {
    const selectedFilters = [];
    if (this.statuses.paid) {
      selectedFilters.push('paid');
    }
    if (this.statuses.pending) {
      selectedFilters.push('pending');
    }
    if (this.statuses.draft) {
      selectedFilters.push('draft');
    }
    return selectedFilters;
  }

  applyFilters() {
    this.store.dispatch(
      invoiceActions.filterInvoices({
        statuses: this.selectedStatus(),
      })
    )
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // getSelectedFilters() {
  //   return this.filters
  //     .filter((filter) => filter.selected)
  //     .map((filter) => filter.value);
  // }

//   get filteredItems() {
//     const activeFilters = this.getSelectedFilters();

//     if (activeFilters.length === 0) {
//       return this.items;
//     }

//     return this.items.filter((item) => activeFilters.includes(item.status));
//   }
}
