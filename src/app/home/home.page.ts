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
  filteredSuburbs = [];
  public fromSelected;
  public toSelected;
  public options:AutoCompleteOptions;
  fromOptions;
  toOptions;

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
  }

  getSuburbs() {
    this.service.getSuburbs().subscribe((res:any) => {
      this.suburbs = res.payload;
      this.filteredSuburbs = this.suburbs;
    })
  };

  searchFromSuburb(searchValue) {
    console.log(searchValue);
    console.log("===================");
    this.filteredSuburbs = this.suburbs.filter((res:any) => (res.name && res.name.toLowerCase().includes(searchValue)) || (res.postal_code && res.postal_code === searchValue) || (res.zone && res.zone === searchValue));
    console.log(this.filteredSuburbs);
  }

  fromItemSelected(object) {
    this.fromSelected = object;
  }

  toItemSelected(object) {
    this.toSelected = object;
  }

}
