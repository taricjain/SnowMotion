import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CallbackInterface, Coordinate } from './models';

@Injectable()
export class WeatherService {

  constructor(private httpService: HttpClient) { }

  getDataWithCoordinates(coordinate?: Coordinate, callback: CallbackInterface) {
    this.httpService.get("https://api.darksky.net/forecast/5bac16c1f3e50319994bb24e50ec5ec5/32.593357,-85.495163?exclude=[flags,alerts]")
    .subscribe((data) => {
      console.log(data["currently"]["summary"]);
    });
  }
}
