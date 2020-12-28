import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DolarvalueService {
  public url:string;
  constructor(private http : HttpClient) { 
  	this.url = "https://mindicador.cl/api/dolar";
  }

  getDolarValue(){
  	return this.http.get(this.url);
  }
}
