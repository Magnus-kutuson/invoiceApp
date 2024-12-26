import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  dropdownOpen = false;

  filters = [
    {id: '1', title:'Draft', selected: false},
    {id: '2', title:'Pending', selected: false},
    {id: '3', title:'Paid', selected: false},
  ]

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getSelectedFilters() {
    return this.filters.filter(filter => filter.selected);
  }
}
