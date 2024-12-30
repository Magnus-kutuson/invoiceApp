import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeadlineComponent } from '../headline/headline.component';




@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, HeadlineComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  dropdownOpen = false;

  items = [
    { status: 'paid' },
    { status: 'pending' },
    { status: 'draft' },
    { status: 'paid' },
  ];

  filters = [
    { id: '1', title: 'Paid', value: 'paid', selected: false },
    { id: '2', title: 'Pending', value: 'pending', selected: false },
    { id: '3', title: 'Draft', value: 'draft', selected: false },
  ];
  invoices: any;

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
