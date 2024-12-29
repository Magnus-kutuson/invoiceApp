import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { HeadlineComponent } from '../headline/headline.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,BadgeComponent, HeadlineComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
