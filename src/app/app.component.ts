import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { NotificationService } from './shared/notification.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'invoiceApp';

  constructor(private notificationService: NotificationService) {}

  createItem(): void {
    // Simulate a successful CRUD operation
    this.notificationService.showNotification({
      message: 'Item created successfully!',
      type: 'success',
      duration: 3000, // 3 seconds
    });
  }
}
