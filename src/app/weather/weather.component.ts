import { Component, OnInit, Input } from '@angular/core';
import {} from 'googlemaps';
import { WeatherService } from '../weather.service';
import { WeatherData, Coordinate } from '../models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public currentPlace: google.maps.places.PlaceResult;

  private weatherData: WeatherData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // Calling weather service for current location data
    var coordinate: Coordinate = { latitude: this.currentPlace.geometry.location.lat(), longitude: this.currentPlace.geometry.location.lng()};
    this.weatherService.getDataWithCoordinates(coordinate, (error, response) => {
      this.weatherData = response as WeatherData;
    });
  }
}
