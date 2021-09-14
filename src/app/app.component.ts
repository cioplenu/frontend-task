import { Component, OnInit } from '@angular/core';
import { AppState, selectSearchTerm } from './ngrx/reducers';
import { select, State } from '@ngrx/store';

// import {Country} from './country.model';
// import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  // countries$: Country[]= [];

  constructor() {}

  ngOnInit(){

  }

  // public searchTerm$ = this.state.pipe(select(selectSearchTerm));
}
