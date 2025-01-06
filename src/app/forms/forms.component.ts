import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [HeadlineComponent, TextComponent,CommonModule,ReactiveFormsModule, CommonModule, DatePickerComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {

  items = [
    { id: 1, title: 'Net 1 day'},
    { id: 1, title: 'Net 7 days'},
    { id: 1, title: 'Net 14 days'},
    { id: 1, title: 'Net 30 days'}
  ];
  
}
