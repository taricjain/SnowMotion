import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { WeatherService } from './weather.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxD3LiquidFillGaugeModule } from 'ngx-d3-liquid-fill-gauge';
import { WeatherComponent } from './weather/weather.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    WeatherComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      libraries: ["places"],
      apiKey: 'AIzaSyCQTJWx8q9B0g2LnrI8qUw2virGuLj8P20'
    }),
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxD3LiquidFillGaugeModule,
    NgxChartsModule,
    DragScrollModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
