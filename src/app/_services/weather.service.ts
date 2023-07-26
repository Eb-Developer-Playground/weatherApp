import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IweatherData,iForecast } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<IweatherData> {
    return this.http.get<IweatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.weatherApiXRapidAPIHostHeaderName, environment.weatherApiXRapidAPIHostHeaderValue)
      .set(environment.weatherApiXRapidAPIKeyHeaderName, environment.weatherApiXRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
  }

