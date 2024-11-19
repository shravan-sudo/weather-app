import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { WeatherItem } from '../weather-item/weather-item';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {
  private searchStream = new Subject<string>();
  data: any = {};
  isCityFound: boolean = false;
  isSearching: boolean = false;

  constructor(private _weatherService: WeatherService) {}

  onSearchLocation(value: string): void {
    console.log(value);
    this.isSearching = true;
    this.searchStream.next(value);
  }

  onSubmit(f: NgForm) {
    let cityName: string = this.data.name;
    let cityDescription: string = this.data.weather ? this.data.weather[0].main : '';
    let cityTemperature: any = this.data.main ? 1 * this.data.main.temp_min : null;
    let countryCode = this.data.sys ? this.data.sys.country : '';

    const newItem = new WeatherItem(cityName, cityDescription, cityTemperature, countryCode);

    if (cityName && !this._weatherService.isExistWeatherItem(newItem)) {
      this._weatherService.addWeatherItem(newItem);
      f.resetForm();
    }
  }

  ngOnInit(): any {
    this.searchStream.pipe(
        debounceTime(5000),
        distinctUntilChanged(),
        switchMap((term: string) => this._weatherService.searchWeatherInfo(term))
      )
      .subscribe(
        (data: any) => {
          if (data.name) {
            this.isCityFound = true;
          } else {
            this.isCityFound = false;
          }
          this.isSearching = false;
          this.data = data;
        },
        (error: any) => console.warn(error)
      );
  }
}
