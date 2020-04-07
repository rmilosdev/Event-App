import { Injectable, EventEmitter } from '@angular/core';
import {Event} from './events/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventsChanged = new EventEmitter<Event[]>();

  date: Date = new Date();
  numberOfEvents = 0;

  events: Event[] = [
    new Event((this.date.getHours() + ':' + this.date.getMinutes()).toString(), 'Breakfast with Simon', 'Lounge Caffe', 'Discuss Q3 Targets'),
    new Event('8:15', 'Daily Standup Meeting(reccuring)', 'Warsaw Sprire Office', '')
  ];

  constructor() { }

  getEvents(){
    return this.events.slice();
  }

  deleteEvent(index: number){
    this.events.splice(index, 1);
    this.eventsChanged.next(this.events.slice());
  }

  addEvent(event: Event){
    this.events.push(event);
    this.eventsChanged.next(this.events.slice());
  }

  countEvents(){
    return this.numberOfEvents = this.events.length;
  }

}
