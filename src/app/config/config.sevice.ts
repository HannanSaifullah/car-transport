import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
    
  getSuburbs() {
    return this.http.get("http://localhost:5000/api/suburb");
  }
   
}