import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import {trigger, transition, style, query, group, animateChild, animate, keyframes} from '@angular/animations';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [


    trigger('routeAnimations', [
      transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)',
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ])
      ]),

  ]),
  ]
})
export class CalendarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['schedule'], {relativeTo: this.route});
  }

  onEventAdd(){
    this.router.navigate(['event/add'], {relativeTo: this.route});
  }

  getDepth(outlet: RouterOutlet){
    return outlet.activatedRouteData['depth'];
  }

}
