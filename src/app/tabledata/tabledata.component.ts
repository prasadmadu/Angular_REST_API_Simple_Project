import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Countries } from '../Countries';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit{

  constructor( private rs: RestService){}

  countries: Countries[] = [];


  displayedColumns: string[] = ['name', 'alpha2Code', 'capital'];
  dataSource = new MatTableDataSource<Countries>(this.countries);

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
