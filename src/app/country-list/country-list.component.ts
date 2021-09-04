import { Component, OnInit } from '@angular/core';

import { Country } from '../country.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries$: Country[] =[];
  dummyCountries$: Country[] = [];
  
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(){
    console.log(this.dataService.getCountryList().subscribe(data => this.countries$ = data))

    return this.dataService.getCountryList()
    .subscribe(data => {
    this.countries$ = data;
    this.dummyCountries$ = data
    })
  }

 sort(region:string){
    console.log(this.countries$.filter(country=>country.region===region))
    
    const filiteredCountryList = this.dummyCountries$.filter(country=>country.region===region)
    this.countries$ = filiteredCountryList
  //  return this.dataService.getCountryList()
  //   .subscribe(data => this.countries$ = data.filter(x=>x.region = region))
 }

}
