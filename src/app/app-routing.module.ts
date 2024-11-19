import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WeatherItemComponent } from './weather/weather-item/weather-item.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';

const routes: Routes = [
  // { path: 'side', component: SidebarComponent },
  // { path: 'weatheritem', component: WeatherItemComponent },
  // { path: 'weatherlist', component: WeatherListComponent },
  // { path: 'search', component: WeatherSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
