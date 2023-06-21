import { Component } from '@angular/core';


import { ViewEncapsulation } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { WeatherService } from '@app/_services';

import { weatherData } from '@app/_models';

@Component({ 
  selector:'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None })

export class HomeComponent {
  cityName: string = 'Nairobi';
  
  weatherData?: weatherData;

  constructor(private http: HttpClient, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ' ';
  }

  onSubmit(event:any) {
    this.getWeatherData(event.target[0].value);
    this.cityName = ' ';
    console.log(event.target[0].value)
    }
    

  getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe((response: weatherData) => {
        this.weatherData = response;
        console.log(response);
        });
      
    }
     
}