import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  //weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;

  constructor(private _httpService:HttpService){}

  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    let obs = this._httpService.getAPI('washington')
    obs.subscribe( data => {
      console.log("washington", data)
      this.humidity = data['main'].humidity;
      this.temp = data['main'].temp;
      this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
      this.maxTemp = data['main'].temp_max;
      this.maxTemp = Math.floor(this.maxTemp * (9 / 5) - 459.67);
      this.minTemp = data['main'].temp_min;
      this.minTemp = Math.floor(this.minTemp * (9 / 5) - 459.67);
      this.clouds = data['weather'][0].description;

    }
  )
  }
}
