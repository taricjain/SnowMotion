import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { WeatherData, Coordinate } from '../models';
import { WeatherService } from '../weather.service';
import { FormControl, FormsModule } from '@angular/forms';
import { MapsAPILoader, AgmCoreModule, GoogleMapsAPIWrapper, InfoWindowManager, AgmInfoWindow } from '@agm/core';
import {} from 'googlemaps';

import { single, multi } from './data';
declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass'],
})
export class ContentComponent implements OnInit {

  @Input()
  title: string;

  public latitude: number;
  public longitude: number;
  public zoom: number;

  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private weatherService: WeatherService) {
    Object.assign(this, {single, multi})
  }
  onSelect(event) {
    console.log(event);
  }
  private weatherData: WeatherData;
  private currentPlace: google.maps.places.PlaceResult;

  ngOnInit() {
    //default overlook on America
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    this.zoom = 4;

    this.searchControl = new FormControl();
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;

          // Building coordinate
          var selectedCoordinates: Coordinate = { latitude: this.latitude, longitude: this.longitude};
          // Send request to weather api
          this.weatherService.getDataWithCoordinates(selectedCoordinates, (error, response) => {
              this.updateViewWithWeatherData(place, response);
          });

        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  updateViewWithWeatherData(place: google.maps.places.PlaceResult, weatherData: any) {
    this.weatherData = weatherData as WeatherData;
    this.currentPlace = place;
    console.log(this.weatherData);
  }
}
