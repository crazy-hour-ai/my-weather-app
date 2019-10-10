import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpSvc : HttpClient) { }

  getWeather(city: string, apiKey: string) : Promise<any> {
    console.log("Get weather...");

    const params = new HttpParams()
    .set("q", city)
    .set("appid", apiKey);

    return this.httpSvc.get(environment.api_url, {params : params}).toPromise();
  }

}
