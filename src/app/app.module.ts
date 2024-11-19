
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WeatherItemComponent } from './weather/weather-item/weather-item.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { TemperatureDirective } from './weather/temperature.directive';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather/weather.service';
import { ProfileService } from './profile/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    TemperatureDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,

  ],
  providers: [WeatherService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
