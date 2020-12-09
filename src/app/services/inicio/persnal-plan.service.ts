import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class PersnalPlanService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
  }
  getPersonalPlan() {
    return this.http.get(`${this.url}/show-personal-plan`)
  }
}
