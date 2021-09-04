import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UnsubscriptionError } from 'rxjs';
import { CountryListComponent } from '../country-list/country-list.component';

import { Country} from '../country.model';
import { DataService } from '../data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: Country= {name :"",
   region :"",
   capital :"",
   population :0,
   flag:"",
   borders:[],
   alpha3Code:""
   };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(){

    const routeParams = this.route.snapshot.paramMap;
    const countryNameFromRoute = routeParams.get('countryName');

    return this.dataService.getCountryDetail(countryNameFromRoute)
    .subscribe(data => {
      this.country = data[0]
      console.log(this.country)
    })
    
  }


  getOfficialCountryName(selectedCountry:string){
    this.dataService.getCountryList()
    .subscribe(data=>{
      const extraction = data.find(country=>country.alpha3Code === selectedCountry)
      return extraction

    })
  }

}
