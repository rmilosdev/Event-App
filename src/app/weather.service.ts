import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '954bb7d2b92a15818e48a60da018c20d';
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q='
   }

   getWeather(city, code) {
     return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey + '&units=metric');
   }
}
