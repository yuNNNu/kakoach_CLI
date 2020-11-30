import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatalevelsService {


  public urlData: string;
  constructor(private http: HttpClient) {


    this.urlData = "../../assets/json/planes/ideaPlans.json";

  }
  getData() {
    return this.http.get(this.urlData);
  }

}
