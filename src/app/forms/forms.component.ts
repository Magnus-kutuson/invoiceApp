import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { TextfieldComponent } from '../textfield/textfield.component';
import { DropdownComponent } from '../dropdown/dropdown.component';



@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    HeadlineComponent,
    TextComponent,
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    DatePickerComponent,
    TextfieldComponent,
    DropdownComponent
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {

}
