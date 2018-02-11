import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { WeatherData, Coordinate } from '../models';
import { WeatherService } from '../weather.service';
import { FormControl, FormsModule } from '@angular/forms';
import { MapsAPILoader, AgmCoreModule } from '@agm/core';
import {} from 'googlemaps';

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
  private hasCurrentPlace: boolean = false;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private weatherService: WeatherService) {}
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

          this.updateViewWithWeatherData(place);
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

  updateViewWithWeatherData(place: google.maps.places.PlaceResult) {
    this.hasCurrentPlace = true;
    this.currentPlace = place;
  }
  public smoothness() {
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  } 
}
