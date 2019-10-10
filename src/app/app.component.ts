import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';
import { Weather } from './model/weather';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-day06-service';

  api_key = "476e23fe1116f4e69d2a3e68672604e1";
  city = "Singapore";
  model = new Weather(this.city, 0,0,0,0,0);

  countries = [
    {countryName: 'China', city: 'Beijing'},
    {countryName: 'India', city: 'New Delhi'},
    {countryName: 'Malaysia', city: 'Kuala Lumpur'},
    {countryName: 'Singapore', city: 'Singapore'}
  ]

  country;

  constructor(private weatherSvc: WeatherService, private route: ActivatedRoute ){

  }
  // ngOnInit(){
  //   this.weatherSvc.getWeather(this.city, this.api_key)
  //   .then(result=>{
  //     console.log(result);

  //     this.model = new Weather (this.city, result.main.temp, result.main.pressure,
  //       result.main.humidity,
  //       result.wind.speed,
  //       result.main.humidity,)

  //   }).catch(error=>{
  //     console.log(error);
  //   })

  // }

  ngOnInit(){
    this.getWeatherFromAPI(this.model.city);
    this.route.paramMap.subscribe(params => {
     this.country= this.countries[+params.get('countryId')];
    });
  }

  getWeatherFromAPI(city: string){
 
    this.weatherSvc.getWeather(city, this.api_key).then((result)=>{
      this.model = new Weather(this.model.city, result.main.temp,result.main.pressure,result.main.humidity,result.wind.deg,result.wind.speed);
      console.log(result);
    }).catch((error)=>{
      console.log(error);
    })
  }

  fetchWeatherByCity(event){
    this.getWeatherFromAPI(event.target.value);
  }
}
