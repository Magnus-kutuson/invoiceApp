import { Component, inject, OnInit } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { TextfieldComponent } from '../textfield/textfield.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { selectInvoices } from '../../Stores/reducer';
import { Store } from '@ngrx/store';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../interface/invoice';
import { invoiceActions } from '../../Stores/actions';

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
export class FormsComponent implements OnInit {
  isFormSubmitted = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private readonly fb = inject(FormBuilder);
  invoices$: any = this.store.select(selectInvoices);
  invoiceDetails: any;
  mode: 'new' | 'edit' = 'new';
  invoiceId: string | null = null;
  items: any;

  constructor(private store: Store, private dataService: DataService) {}

  isFieldError(field: string): boolean {
    const control = this.invoiceForm.get(field);
    return ((control?.invalid && control?.touched) ||
      this.isFormSubmitted) as boolean;
  }
  routes: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.store.dispatch(invoiceActions.load());

    this.invoiceId = this.routes.snapshot.paramMap.get('id');
    if (this.invoiceId) {
      this.mode = 'edit';
      this.invoices$.subscribe((invoices: any) => {
        this.invoiceDetails = invoices.find(
          (invoice: any) => invoice.id === this.invoiceId
        );
        if (this.invoiceDetails) {
          this.populateForm(this.invoiceDetails);
        }
      });
    } else {
      this.mode = 'new';
    }

    if (this.invoiceDetails) {
      this.invoiceDetails(this.invoiceDetails);
    }
  }
  getHeader(): string {
    return this.mode === 'edit' ? `Edit  #${this.invoiceId}` : 'New Invoice';
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
    items: this.fb.array([this.createItem()]),
    total: [0],
  });

  createItem() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.min(2)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
      total: [0],
    });
  }

  addNewItem() {
    this.items.push(this.createItem());
  }

  populateForm(invoice: Invoice): void {
    this.invoiceForm.patchValue({
      createdAt: invoice.createdAt,
      description: invoice.description,
      paymentTerms: invoice.paymentTerms.toString(),
      clientName: invoice.clientName,
      clientEmail: invoice.clientEmail,
      status: invoice.status,

      senderStreet: invoice.senderAddress.street,
      senderCity: invoice.senderAddress.city,
      senderPostCode: invoice.senderAddress.postCode,
      senderCountry: invoice.senderAddress.country,

      clientStreet: invoice.clientAddress.street,
      clientCity: invoice.clientAddress.city,
      clientPostCode: invoice.clientAddress.postCode,
      clientCountry: invoice.clientAddress.country,

      // itemName: invoice.items.name,
      // itemQuantity: invoice.itemQuantity,
      // itemPrice: invoice.itemPrice,
      // itemTotal: invoice.itemTotal,

      total: invoice.total,
    });

    this.items.clear();
    invoice.items.forEach((item: any) => {
      this.items.push(
        this.fb.group({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.total,
        })
      );
    });
  }

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
