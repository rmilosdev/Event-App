import { Time } from '@angular/common';

export class Event{
    time: string;
    title: string;
    location: string;
    description: string;

    constructor(time: string, title: string, location: string, desc: string){
        this.time = time;
        this.title = title;
        this.location = location;
        this.description = desc;
    }
}