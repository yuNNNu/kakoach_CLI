import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoNavbarService {
  public url: string;
  // 
  constructor(private http: HttpClient) {
    this.url = "../../../assets/json/inicio/logoNavbar.json"
  }
  // traer logo mediante el protocolo http
  getLogo() {
    return this.http.get(this.url)
  }
}


