import { Component } from '@angular/core';
import { ThemeChangerComponent } from '../theme-changer/theme-changer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { IconsComponent } from '../icons/icons.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { InvoiceComponent } from '../invoice/invoice.component';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ThemeChangerComponent, RouterOutlet, HeaderComponent, IconsComponent, AvatarComponent, InvoiceComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
