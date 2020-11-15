import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from './Countries';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http: HttpClient) { }

  url = 'http://localhost:3000/Countries';

  getCountries(){
    return this.http.get<Countries[]>(this.url);
  }
}
