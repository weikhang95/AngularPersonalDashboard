import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, AnimationBuilder, animate, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition('* => *', [
        style({
          position: 'relative'
        }),

        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({
            opacity: 0,
          }),
        ], { optional: true }),
        query(':leave', [
          animate(1000, style({
            opacity: 0
          }))
        ], { optional: true }),
        query(':enter', [       
          animate(1000, style({
            opacity: 1
          }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated)
      return outlet.activatedRoute.snapshot.url;
    else
      return 0;
  }
}
