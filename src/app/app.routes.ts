import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InvoiceComponent } from './invoice/invoice.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'invoice', pathMatch: 'full' },
      { path: 'invoice', component: InvoiceComponent },
    ],
  },
];
