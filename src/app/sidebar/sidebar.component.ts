import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
// import { WeatherItem } from 'WeatherApp/src/app/weather/item/weather-item/weather-item';
// import { WeatherService } from 'WeatherApp/src/app/weather/weather.service';
import { Profile } from '../profile/profile';
import { ProfileService } from '../profile/profile.service';
import { WeatherService } from '../weather/weather.service';
import { WeatherItem } from '../weather/weather-item/weather-item';
import { retry } from 'rxjs';
// retry

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  profiles!:Profile[];

  constructor(private _profileService:ProfileService, private _weatherService:WeatherService) {}

  onSaveNewProfile() {
      const cities = this._weatherService.getWeatherItems().map(function (element) {
              return {
                  cityName: element.city,
                  countryCode: element.countryCode
              };
          });
      if (cities.length) {
          this._profileService.saveNewProfile(cities);
      }
  }

  onLoadProfile(profile: Profile):void {
      this._weatherService.clearWeatherItems();
      for (let i = 0; i < profile.cities.length; i++) {
          this._weatherService.searchWeatherInfo(profile.cities[i].cityName)
.pipe(retry())
              .subscribe(
                (                  data: { name: string; weather: { main: string; }[]; main: { temp_min: string | number; }; sys: { country: any; }; }) => {
                      let cityName: string = data.name;
                      let cityDescription: string = data.weather[0].main;
                      let cityTemperature: number = +data.main.temp_min;
                      let countryCode = data.sys.country;
                      const weatherItem = new WeatherItem(cityName, cityDescription, cityTemperature, countryCode);
                      this._weatherService.addWeatherItem(weatherItem);
                  }
              );
      }
  }

  onDeleteProfile(event: any, profile: Profile):void {
      event.stopPropagation();
      this._profileService.deleteProfile(profile);
  }

  ngOnInit():any {
      this.profiles = this._profileService.getProfiles();
  }

}
