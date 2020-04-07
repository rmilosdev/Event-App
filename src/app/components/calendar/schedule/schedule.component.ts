import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  weather:any;
  celsius: number;
  temp_min: number;
  temp_max: number;
  main: string;
  numberOfItems = 0;
  scheduleText: string;
  scheduleDetails: string;
  weatherIcon: string;

  thermometer: string = '';

  constructor(private weatherService: WeatherService, private eventService: EventsService) { }

  ngOnInit() {

    this.eventService.eventsChanged.subscribe(item=>{
      this.numberOfItems = this.eventService.countEvents();
      this.getScheduleText();
    })

    this.weatherService.getWeather('belgrade', 'rs').subscribe((response) =>{
      console.log(response);
      this.weather = response;

      this.celsius = Math.floor(this.weather.list[0].main.temp);
      this.temp_min = Math.round(this.weather.list[0].main.temp_min * 10) / 10;
      this.temp_max = Math.round(this.weather.list[0].main.temp_max * 10) / 10;

      this.main = this.weather.list[0].weather[0].main;

      this.numberOfItems = this.eventService.countEvents();

      this.getThermometerClass();
      this.getScheduleText();
      this.getScheduleDetails();
      this.weatherIcon = this.main == 'Clear' ? 'fa fa-sun-o' : ('Rain' ? 'fa fa-cloud':'fa fa-cloud');

    });
  }

  getThermometerClass(){

    this.thermometer = this.celsius > 29 ? 'fa fa-thermometer-full' :
    (this.celsius >= 19 && this.celsius <= 29 ? 'fa fa-thermometer-half' :
    (this.celsius >= 10 && this.celsius < 19 ? 'fa fa-thermometer-quarter' :
    (this.celsius >= 5 &&  this.celsius < 10 ? 'fa fa-thermometer-quarter' : ' fa fa-thermometer-empty')));

  }

  getScheduleText(){

    if(this.numberOfItems == 0){
      this.scheduleText = "Today is your free day! You have "
    }else if(this.numberOfItems > 0 && this.numberOfItems <= 2){
      this.scheduleText = "It's not going to be busy that today. You have just "
    }else if(this.numberOfItems > 2 && this.numberOfItems <= 4){
      this.scheduleText = "It's going to be busy that today. You have "
    }else if(this.numberOfItems > 4){
      this.scheduleText = "It's going to be very busy that today! You have ";
    }

  }

  getScheduleDetails(){
    this.scheduleDetails = this.main == "Clear" ? "Don't forget your sunglasses. Today will dry and sunny,becoming warm in the afternoon" : "Today it will be cloudy, with the possibility of rain";
  }

}
