import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-changer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-changer.component.html',
  styleUrl: './theme-changer.component.css'
})
export class ThemeChangerComponent {
  isDarkMode: boolean = false; // Default to light mode

  toggleMode() {
    this.isDarkMode = !this.isDarkMode; // Toggle between true and false
    this.updateBodyClass();
  }

  updateBodyClass() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Optional: Apply default mode on component initialization
  ngOnInit() {
    this.updateBodyClass();
  }
}
