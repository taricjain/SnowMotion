import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CallbackInterface, Coordinate, ServerPayload, WeatherData, HourData, MinuteData, MinutelyData } from './models';

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
      weatherData.temperature = data["currently"]["temperature"];
      weatherData.humidity = data["currently"]["humidity"];
      weatherData.visibility = data["currently"]["visibility"];
      weatherData.icon = data["currently"]["icon"];

      // Getting hourly data
      weatherData.hourData = {} as HourData;
      weatherData.hourData.summary = data["hourly"]["summary"];
      weatherData.hourData.data = new Array<WeatherData>();
      data["hourly"]["data"].forEach(element => {
        var hourWeatherData: WeatherData = {} as WeatherData;
        hourWeatherData.time = element["time"];
        hourWeatherData.temperature = element["temperature"];
        hourWeatherData.humidity = element["humidity"];
        hourWeatherData.visibility = element["visibility"];
        hourWeatherData.icon = element["icon"];
        weatherData.hourData.data.push(hourWeatherData);
      });

      if (data.hasOwnProperty("minutely")) {
        //Getting minutely data
        weatherData.minuteData = {} as MinuteData;
        weatherData.minuteData.summary = data["minutely"]["summary"];
        weatherData.minuteData.minutelyData = new Array<MinutelyData>();
        data["minutely"]["data"].forEach(element => {
          var minutelyData: MinutelyData = {} as MinutelyData;
          minutelyData.time = element["time"];
          minutelyData.precipIntensity = element["precipIntensity"];
          minutelyData.precipProbability = element["precipProbability"];
          minutelyData.precipType = element["precipType"];
          weatherData.minuteData.minutelyData.push(minutelyData);
        });
      }
      callback(null, weatherData);
    });
  }

  getTimeMachineData(coordinate: Coordinate, time:number, callback: CallbackInterface) {
    var serverPayload: ServerPayload = {
      api_url: environment.DARK_SKY_URL 
      + "/" + coordinate.latitude as string 
      + "," 
      + coordinate.longitude as string
      + ","
      + time
      + "?exclude=[flags,alerts]"
    };

    this.httpService.post(environment.SERVER_API_URL, serverPayload)
    .subscribe((data) => {
      var weatherData: WeatherData = {} as WeatherData;
      if (data.hasOwnProperty("latitude")) {
        weatherData.latitude = data["latitude"];
        weatherData.longitude = data["longitude"];
        weatherData.time = data["currently"]["time"];
        weatherData.currentSummary = data["currently"]["summary"];
        weatherData.temperature = data["currently"]["temperature"];
        weatherData.humidity = data["currently"]["humidity"];
        weatherData.visibility = data["currently"]["visibility"];
        weatherData.icon = data["currently"]["icon"];
      }

      if (data.hasOwnProperty("hourly")) {
        // Getting hourly data
        weatherData.hourData = {} as HourData;
        weatherData.hourData.summary = data["hourly"]["summary"];
        weatherData.hourData.data = new Array<WeatherData>();
        data["hourly"]["data"].forEach(element => {
          var hourWeatherData: WeatherData = {} as WeatherData;
          hourWeatherData.time = element["time"];
          hourWeatherData.temperature = element["temperature"];
          hourWeatherData.humidity = element["humidity"];
          hourWeatherData.visibility = element["visibility"];
          hourWeatherData.icon = element["icon"];
          weatherData.hourData.data.push(hourWeatherData);
        });
      }
      callback(null, weatherData);
    });
  }
}
