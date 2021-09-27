import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { NotificationData } from '../shared/notification-data.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5px)'
        }),
        animate('150ms ease-out')
      ]),
      transition(':leave', [
        animate(125, style({
          opacity: 0,
          transform: 'scale(0.85)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification: NotificationData

  timeout: any

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifications.subscribe((notification: NotificationData) => {
      this.notification = notification

      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        this.notification = null
      }, this.notification.duration)
    })
  }

}
