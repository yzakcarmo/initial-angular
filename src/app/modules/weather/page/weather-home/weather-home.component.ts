import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {WeatherData} from "../../../../models/interfaces/WeathersData.interface";

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  initialCity = 'São Paulo';
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getWeatherData(this.initialCity);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response)=> {
          response && (this.weatherData = response);
          console.log(this.weatherData);
        },
        error: (error) => console.log(error)
      })
  }
}
