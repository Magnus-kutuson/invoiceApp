import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutComponent, DatePickerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'invoiceApp';
}
