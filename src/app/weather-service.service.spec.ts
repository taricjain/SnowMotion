import { TestBed, inject } from '@angular/core/testing';

import { WeatherServiceService } from './weather-service.service';

describe('WeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherServiceService]
    });
  });

  it('should be created', inject([WeatherServiceService], (service: WeatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
