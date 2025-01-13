import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutComponent,DeleteCardComponent, DropdownComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'invoiceApp';
}
