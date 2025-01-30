import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.css'
})
export class HeadlineComponent {
@Input() type: 'H1' | 'H2' | 'H3' | 'H4'  = 'H1';
}
