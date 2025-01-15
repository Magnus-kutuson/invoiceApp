import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Notification {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number; // in milliseconds
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  showNotification(notification: Notification): void {
    const currentNotifications = this.notificationsSubject.value;
    this.notificationsSubject.next([...currentNotifications, notification]);

    if (notification.duration) {
      setTimeout(
        () => this.removeNotification(notification),
        notification.duration
      );
    }
  }

  private removeNotification(notificationToRemove: Notification): void {
    const currentNotifications = this.notificationsSubject.value.filter(
      (notification) => notification !== notificationToRemove
    );
    this.notificationsSubject.next(currentNotifications);
  }
}
