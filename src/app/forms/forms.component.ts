import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [HeadlineComponent, TextComponent,CommonModule,ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  myForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      terms: ['', Validators.required],
      payment: ['', Validators.required],
      postCode: ['', Validators.required],
      country: ['', Validators.required],
      date: ['', Validators.required],
      paymentTerms: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  items = [
    { id: 1, title: 'Net 1 day'},
    { id: 1, title: 'Net 7 days'},
    { id: 1, title: 'Net 14 days'},
    { id: 1, title: 'Net 30 days'}
  ];
  
}
