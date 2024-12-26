import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  filters = [
    {id: '1', title:'Draft'},
    {id: '2', title:'Pending'},
    {id: '3', title:'Paid'},
  ]

  selectedFilter = this.filters[0]; 

  onFilterChange(event: any) {
    console.log(event);
  } 

  onCheckboxChange(filter: any) {
    console.log(filter);
  }

}
