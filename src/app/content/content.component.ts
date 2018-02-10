import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormControl, FormsModule } from '@angular/forms';
import { MapsAPILoader, AgmCoreModule, GoogleMapsAPIWrapper, InfoWindowManager, AgmInfoWindow } from '@agm/core';
import {} from 'googlemaps';

declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
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

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone ) {}

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
}