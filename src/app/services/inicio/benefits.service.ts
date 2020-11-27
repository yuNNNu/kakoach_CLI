import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BenefitsService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = "../../../assets/json/inicio/benefits.json"
  }
  getBenefits() {
    return this.http.get(this.url)
  }
}
