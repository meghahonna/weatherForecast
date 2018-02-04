import { Component } from '@angular/core';
import { AppService } from './app.service';
import { IForecastData } from './appData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  title = 'Weather Forecasting';
  public forecastData: IForecastData;

  constructor(private forecastService: AppService) {
   this.forecastService.getForecast()
     .subscribe(data => {
       this.forecastData = data;
     });
  }
}
