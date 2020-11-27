import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatalevelsService {

  public urldefinition: string;
  public urlhypertrophy: string;

  constructor(private http: HttpClient) {

  	this.urldefinition = "../../assets/json/definition.json";
  	this.urlhypertrophy = "../../assets/json/hypertrophy.json";

  }

  getDefinitionData(){
  	return this.http.get(this.urldefinition);
  }

  getHypertrophyData(){
  	return this.http.get(this.urlhypertrophy);
  }
}
