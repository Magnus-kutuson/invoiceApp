import { Component,inject } from '@angular/core';
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
    DropdownComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  isFormSubmitted = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private readonly fb = inject(FormBuilder);

  // Get field error state to style input border
  isFieldError(field: string): boolean {
    const control = this.invoiceForm.get(field);
    return ((control?.invalid && control?.touched) ||
      this.isFormSubmitted) as boolean;
  }


  invoiceForm = this.fb.group({
    createdAt: ['', [Validators.required, Validators.min(2)]],
    // paymentDue: ['', [Validators.required, Validators.min(2)]],
    description: ['', [Validators.required, Validators.min(2)]],
    paymentTerms: ['', [Validators.required, Validators.min(1)]],
    clientName: ['', [Validators.required, Validators.min(2)]],
    clientEmail: [
      '',
      [Validators.required, Validators.pattern(this.emailPattern)],
    ],
    status: ['pending'],

    senderStreet: ['', [Validators.required, Validators.min(2)]],
    senderCity: ['', [Validators.required, Validators.min(2)]],
    senderPostCode: ['', [Validators.required, Validators.min(2)]],
    senderCountry: ['', [Validators.required, Validators.min(2)]],

    clientStreet: ['', [Validators.required, Validators.min(2)]],
    clientCity: ['', [Validators.required, Validators.min(2)]],
    clientPostCode: ['', [Validators.required, Validators.min(2)]],
    clientCountry: ['', [Validators.required, Validators.min(2)]],

    itemName: ['', [Validators.required, Validators.min(2)]],
    itemQuantity: [1, [Validators.required, Validators.min(1)]],
    itemPrice: [1, [Validators.required, Validators.min(1)]],
    itemTotal: [1],

    total: [0],
  });

  onSubmit() {
    this.isFormSubmitted = true;
    Object.keys(this.invoiceForm.controls).forEach((control) => {
      const controlInstance = this.invoiceForm.get(control);
      if (controlInstance) {
        controlInstance.markAsTouched();
        controlInstance.updateValueAndValidity();
      }
    });

    console.log(this.invoiceForm.value);
    // Proceed with form submission logic
  }
}
