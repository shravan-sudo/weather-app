import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'weatherapp';
  public title:string;
  constructor () {
      this.title = `Weather App`;
  }
}
