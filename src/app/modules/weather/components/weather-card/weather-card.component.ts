import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from "../../../../models/interfaces/WeathersData.interface";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{
  @Input() weatherDatasInput!: WeatherData;

  ngOnInit(): void {
    console.log(
      "Dados recebidos do PAI",
      this.weatherDatasInput
    )
  }
}
