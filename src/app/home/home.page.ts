import { Component, OnInit  } from '@angular/core';
import { AutoCompleteOptions } from 'ionic4-auto-complete';
import { ConfigService } from '../config/config.sevice';
import { FilterSuburbService } from './filterSuburbService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  suburbs :[] = [];
  cars:[]=[];
  filteredSuburbs = [];
  public options:AutoCompleteOptions;
  fromOptions;
  toOptions;

  // form model fields bind with ngModel
  from;
  to;
  car;
  date;
  email;
  tAndC : Boolean = false;

  constructor(private service:ConfigService, public filterSuburbService: FilterSuburbService){
    this.options = new AutoCompleteOptions();
    this.options.mode= 'md';
    this.options.autocomplete = 'on';
    this.options.debounce = 150;
    this.options.placeholder = 'Type text to search..';
    this.fromOptions = {...this.options,placeholder:'From'}
    this.toOptions = {...this.options,placeholder:'To'}
  }

  ngOnInit(){
    this.getCars();
  }

  getCars(){
    this.service.getCars().subscribe((res: any) => {
      this.cars = res.payload;
    })
  }

  searchFromSuburb(searchValue) {
    console.log(searchValue);
    console.log("===================");
    this.filteredSuburbs = this.suburbs.filter((res:any) => (res.name && res.name.toLowerCase().includes(searchValue)) || (res.postal_code && res.postal_code === searchValue) || (res.zone && res.zone === searchValue));
    console.log(this.filteredSuburbs);
  }

  fromItemSelected(object) {
    this.from = object;
  }

  toItemSelected(object) {
    this.to = object;
  }

  calculate() {
    const postData = {
      fromSuburb: this.from._id,
      toSuburb: this.to._id,
      car: this.car,
      date: this.date,
      email: this.email
    }
    this.service.calculate(postData).subscribe((res:any) => {
      // this.resetForm();
      // this.suburbs = res.payload;
      // this.filteredSuburbs = this.suburbs;
    })
  }

  resetForm() {
    this.from = {};
    this.to = {};
    this.car=null;
    this.date =null;
    this.email = null;
  }

}
