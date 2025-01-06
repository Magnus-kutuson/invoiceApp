import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { FilterComponent } from '../filter/filter.component';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FilterComponent, HeadlineComponent, TextComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isOpen = false;

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }

  closeDrawer() {
    this.isOpen = false;
  }
}
