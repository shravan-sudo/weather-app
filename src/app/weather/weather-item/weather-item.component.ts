import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherItem } from './weather-item';
// import { WeatherItem } from 'WeatherApp/src/app/weather/item/weather-item/weather-item';
// import { WeatherService } from 'WeatherApp/src/app/weather/weather.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent {
  @Input('weatherItem') item!: WeatherItem;

  constructor(private _weatherService: WeatherService) {}

  onDeleteItem(event: any, item: WeatherItem):void {
      event.stopPropagation();
      this._weatherService.deleteWeatherItem(item);
  }
}
