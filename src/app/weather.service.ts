import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CallbackInterface, Coordinate, ServerPayload } from './models';

@Injectable()
export class WeatherService {

  constructor(private httpService: HttpClient) { }

  getDataWithCoordinates(callback: CallbackInterface) {
    var serverPayload: ServerPayload = { api_url: "https://api.darksky.net/forecast/5bac16c1f3e50319994bb24e50ec5ec5/32.593357,-85.495163?exclude=[flags,alerts]" };
    this.httpService.post(environment.SERVER_API_URL, serverPayload)
    .subscribe((data) => callback(null, data));
  }
}
