import { Component } from '@angular/core';
// import { WeatherService } from 'WeatherApp/src/app/weather/weather.service';
import { WeatherItem } from '../weather-item/weather-item';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {
  weatherItems!: WeatherItem[];

  constructor(private _weatherService: WeatherService) {}

  ngOnInit():any {
      this.weatherItems = this._weatherService.getWeatherItems();
  }
}
