import { Component, OnInit } from '@angular/core';
import { Countries } from './Countries';
import { RestService } from './rest.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practical';

  // ELEMENT_DATA: Countries[];
  // displayedColumns: string[] = [ 'Country name', 'country code', 'capital'];
  // dataSource = new MatTableDataSource<Countries>(this.ELEMENT_DATA);

  constructor( private rs: RestService){}


  columns = [ 'Country name', 'country code', 'capital'];

  index = [ 'name', 'alpha2Code', 'capital'];

  countries: Countries[] = [];

  ngOnInit(): void {
    this.rs.getCountries().subscribe(
      (response) => {
        this.countries = response;
      },

      (error) => {
        console.log('Error :' + error);
      }
    );
  }

}
