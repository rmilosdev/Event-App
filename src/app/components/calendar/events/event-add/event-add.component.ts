import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import { Event } from '../event.model';
import { EventsService } from '../../events.service';


@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private location:Location, private eventService: EventsService) { }

  ngOnInit() {
    this.initForm();
  }

  onCancel(){
    this.location.back();
  }

  addEvent(){
    this.eventService.addEvent(this.eventForm.value);
    this.eventForm.reset();
    this.location.back();
  }

  private initForm(){
    let eventTitle = '';
    let eventTime = '';
    let eventLocation = '';
    let eventDesc = '';

    this.eventForm = new FormGroup({
      'time': new FormControl(eventTime, [Validators.required, Validators.pattern('^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$')]),
      'title': new FormControl(eventTitle, Validators.required),
      'location': new FormControl(eventLocation, Validators.required),
      'description': new FormControl(eventDesc)
    })
  }

}
