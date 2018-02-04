import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForecastData } from './appData';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {

     console.log('app service');

}

  public getForecast(): Observable<IForecastData> {
     console.log('forecast');
     const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bangalore,in&APPID=730175cd9a463d005099f84b9599a0bf';
     return this.http.get<IForecastData>(url);
  }
}
