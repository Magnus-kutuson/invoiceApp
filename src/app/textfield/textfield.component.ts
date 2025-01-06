import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.css',
})
export class TextfieldComponent {
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
}
