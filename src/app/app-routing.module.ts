import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventAddComponent } from './components/calendar/events/event-add/event-add.component';
import { ScheduleComponent } from './components/calendar/schedule/schedule.component';

const routes: Routes = [
  {path: '', redirectTo: 'calendar/schedule', pathMatch: 'full'},
  {
    path: 'calendar', component: CalendarComponent, data: {depth: 1}, children: [
      { path: 'event/add', component: EventAddComponent,  data: {depth: 2}},
      { path: 'schedule', component: ScheduleComponent, data: {depth: 3}}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
