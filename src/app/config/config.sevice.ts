import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
    
  calculate(data) {
    return this.http.post(environment.baseUrl + "api/city/enquiery",data);
  }
   
  getCars() {
    return this.http.get(environment.baseUrl + "api/car");
  }
}