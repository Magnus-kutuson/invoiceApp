import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent implements OnInit {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe((notifications) => {
      this.notifications = notifications;
    });
  }

  getNotificationClass(type: string): string {
    return `notification ${type}`;
  }
}
