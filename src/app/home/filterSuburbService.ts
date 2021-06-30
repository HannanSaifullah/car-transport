import {AutoCompleteService} from 'ionic4-auto-complete';
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class FilterSuburbService implements AutoCompleteService {
  formValueAttribute = ""

  constructor(private http:HttpClient) {
  
  }

  getResults(keyword:string) {
    if (!keyword) { return false; }

    return this.http.get(environment.baseUrl +'api/suburb').pipe(map(
       (result: any) => {
        const filteredSuburbs =  result.payload.filter(
             (item) => {
               return ( item.name && item.name.toLowerCase().includes(
                   keyword.toLowerCase()) || item.postal_code && item.postal_code == keyword || item.zone && item.zone.includes(keyword)
                );
             }
          );
          console.log(filteredSuburbs);
          return filteredSuburbs;
       }
    ));
 }

  // getResults(keyword:string) {
  //   return this.http.get("http://localhost:5000/api/suburb").subscribe(
  //       (result:any) =>
  //       {
  //         const filteredSuburbs =  result.payload
  //           .filter(item => item.name && item.name.toLowerCase().includes(keyword.toLowerCase()));
  //           console.log(filteredSuburbs.length);
  //           return filteredSuburbs;
  //       });
  // }

  getItemLabel(suburb: any) {
    return suburb.name ? suburb.postal_code  + ' - ' + suburb.name : ''  ;
  }
}