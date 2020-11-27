import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirstimageService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = "../../../assets/json/inicio/firstImage.json"
  }
  getFirstImage() {
    return this.http.get(this.url)
  }
}
