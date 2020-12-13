import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  public url: string;
  constructor(private http: HttpClient) {
  	this.url = Ruta.url;
  }

   getPlans(){
 	return this.http.get(`${this.url}/show-planes`);
 } 
}
