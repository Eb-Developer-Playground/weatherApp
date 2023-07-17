import { Component } from '@angular/core';


import { ViewEncapsulation } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { WeatherService } from '@app/_services';

import { IweatherData } from '@app/_models';

@Component({ 
  selector:'home',
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.css'],
  encapsulation: ViewEncapsulation.None 
})

export class HomeComponent {

  constructor(private http: HttpClient, private weatherService: WeatherService) {}
   
  cityName:string = 'Nairobi';
  
  IweatherData?: IweatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response) => {
        this.IweatherData = response;
        console.log(response);
      }
      });
    }
    ;   
}