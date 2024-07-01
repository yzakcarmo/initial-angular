import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherData} from "../../../models/interfaces/WeathersData.interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'ec7c281196c2e2c4109f80285b56d485'

  constructor(private httpClient: HttpClient) { }

  getWeatherData(cityName: string){
    return this.httpClient.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&mode=json&appid=' + this.apiKey, {})
  }
}
