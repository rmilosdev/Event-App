import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../events.service';
import { Event } from '../event.model';
import {trigger, transition, style, query, group, animateChild, animate, keyframes} from '@angular/animations'


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  animations: [
    trigger('deleteAnimation', [
      transition('* => void', [
        animate('1000ms ease-in', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(15%)', offset: 0.7}),
          style({transform: 'translateX(-300%)', offset: 1.0})
        ]))
      ]),
    ])
  ] 
  
})
export class EventListComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.eventService.eventsChanged.subscribe(
      (eventList: Event[]) =>{
      this.events = eventList;
    })
  }

}
