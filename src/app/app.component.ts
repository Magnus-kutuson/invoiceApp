import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ToastrComponent } from './toastr/toastr.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutComponent, ToastrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'invoiceApp';
 
}
