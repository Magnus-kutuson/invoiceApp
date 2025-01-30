import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { SelectedInvoiceComponent } from './pages/Invoice-details/selected-invoice.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'invoice', pathMatch: 'full' },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'invoice/:id', component: SelectedInvoiceComponent },
    ],
  },
];
