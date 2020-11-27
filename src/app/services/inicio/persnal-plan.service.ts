import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersnalPlanService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = "../../../assets/json/inicio/personalPlan.json"
  }
  getPersonalPlan() {
    return this.http.get(this.url)
  }
}
