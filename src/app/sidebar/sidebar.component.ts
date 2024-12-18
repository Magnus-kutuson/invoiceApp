import { Component } from '@angular/core';
import { ThemeChangerComponent } from '../theme-changer/theme-changer.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ThemeChangerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
