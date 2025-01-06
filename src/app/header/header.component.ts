import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { FilterComponent } from '../filter/filter.component';
import { FormsComponent } from '../forms/forms.component';
import { DataService } from '../data.service';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FilterComponent, HeadlineComponent, TextComponent, FormsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataService: DataService) { }
  
  toggleFormVisibility(): void {
    this.dataService.toggleFormVisibility();
  }
 
}
