import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/calendar/events/events.component';
import { EventListComponent } from './components/calendar/events/event-list/event-list.component';
import { EventItemComponent } from './components/calendar/events/event-list/event-item/event-item.component';
import { EventAddComponent } from './components/calendar/events/event-add/event-add.component';
import { ScheduleComponent } from './components/calendar/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventsComponent,
    EventListComponent,
    EventItemComponent,
    EventAddComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
