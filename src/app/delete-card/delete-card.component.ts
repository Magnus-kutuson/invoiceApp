import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-delete-card',
  standalone: true,
  imports: [HeadlineComponent, TextComponent],
  templateUrl: './delete-card.component.html',
  styleUrl: './delete-card.component.css'
})
export class DeleteCardComponent {

}
