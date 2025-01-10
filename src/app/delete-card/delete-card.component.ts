import { Component, OnInit } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-card',
  standalone: true,
  imports: [HeadlineComponent, TextComponent, CommonModule],
  templateUrl: './delete-card.component.html',
  styleUrl: './delete-card.component.css'
})
export class DeleteCardComponent  {
  
}
