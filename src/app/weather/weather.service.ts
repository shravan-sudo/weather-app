import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { WeatherItem } from './weather-item/weather-item';
import { WEATHER_ITEMS } from './mock-weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(item: WeatherItem) {
    WEATHER_ITEMS.push(item);
  }

  clearWeatherItems() {
    WEATHER_ITEMS.splice(0);
  }

  deleteWeatherItem(item: WeatherItem): Observable<any> {
    WEATHER_ITEMS.splice(WEATHER_ITEMS.indexOf(item), 1);
    return null as any;
  }

  isExistWeatherItem(item: WeatherItem): any {
    return WEATHER_ITEMS.some(
      (elem) => elem.city == item.city && elem.countryCode == item.countryCode
    );
  }

  searchWeatherInfo(city: string): Observable<any> {
    const APPID = '7a211c68435846ab04153a9d815b09f3';
    let url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&APPID=' +
      APPID +
      '&units=metric';
    return this._http.get(url).pipe(
      map((response) => response),
      catchError((error) => {
        return new Observable<any>((observer) => {
          observer.error(error);
        });
      })
    );
  }
}
