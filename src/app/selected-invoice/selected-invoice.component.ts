import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeadlineComponent } from '../headline/headline.component';


@Component({
  selector: 'app-selected-invoice',
  standalone: true,
  imports: [TextComponent, RouterModule, RouterLink, RouterOutlet, RouterLinkActive, HeadlineComponent],
  templateUrl: './selected-invoice.component.html',
  styleUrl: './selected-invoice.component.css'
})
export class SelectedInvoiceComponent {

}
