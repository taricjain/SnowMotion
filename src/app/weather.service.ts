import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CallbackInterface, Coordinate, ServerPayload, WeatherData } from './models';

@Injectable()
export class WeatherService {

  constructor(private httpService: HttpClient) { }

  getDataWithCoordinates(coordinate: Coordinate, callback: CallbackInterface) {
    if (coordinate === undefined || coordinate === null) {
      callback(new Error("coordinate needed for service call."));
    }
    var serverPayload: ServerPayload = {
      api_url: environment.DARK_SKY_URL 
      + "/" + coordinate.latitude as string 
      + "," 
      + coordinate.longitude as string
      + "?exclude=[flags,alerts]"
    };
    this.httpService.post(environment.SERVER_API_URL, serverPayload)
    .subscribe((data) => {

      // parse JSON into correct models
      var weatherData: WeatherData = {} as WeatherData;
      weatherData.latitude = data["latitude"];
      weatherData.longitude = data["longitude"];
      weatherData.time = data["currently"]["time"];
      weatherData.currentSummary = data["currently"]["summary"];
      weatherData.temprature = data["currently"]["temperature"];
      weatherData.humidity = data["currently"]["pressure"];
      weatherData.visibility = data["currently"]["visibility"];
      callback(null, weatherData);
    });
  }
}
