import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../../../events.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Event;
  @Input() index: number;


  constructor(private eventService: EventsService) { }

  ngOnInit() {
  }

  onDelete(index: number){
    console.log(this.eventService.getEvents());
    this.eventService.deleteEvent(index);
    console.log(this.eventService.getEvents());
  }

  

}
