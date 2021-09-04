import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { searchReducer } from './ngrx/reducers/search-reducer';
import { AppEffects } from './ngrx/effects/app.effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { DataService } from './data.service';


import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryListComponent } from './country-list/country-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    CountryListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ search: searchReducer }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([ AppEffects ]),
    HttpClientModule,

    RouterModule.forRoot([
      {path:'', component:CountryListComponent},
      {path:'countries/:countryName', component:CountryDetailsComponent}
    ])

  ],
  providers: [DataService],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}


