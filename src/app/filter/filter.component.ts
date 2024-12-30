import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  dropdownOpen = false;

  filters = [
    { id: '1', title: 'Draft', selected: false },
    { id: '2', title: 'Pending', selected: false },
    { id: '3', title: 'Paid', selected: false },
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getSelectedFilters() {
    return this.filters.filter((filter) => filter.selected);
  }
}
