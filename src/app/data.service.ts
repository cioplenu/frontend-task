import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Country} from './country.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrlCountryList = "https://restcountries.eu/rest/v2/all";



  constructor(private _http: HttpClient) { }

  getCountryList() {
    return this._http.get<Country[]>(this.apiUrlCountryList)
  }


  getCountryDetail(country:string|null) {
    return this._http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${country}`)
  }

  // getCountry(name){
  //   for(let i in this.getCountries){
  //     if(this.getCountries[i].name === name){
  //       return this.getCountries[i]
  //     }
  // }}

}
