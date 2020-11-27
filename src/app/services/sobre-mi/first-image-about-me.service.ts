import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FirstImageAboutMeService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = "../../../assets/json/sobre-mi/firstImage.json"
  }
  getImageAboutMe() {
    return this.http.get(this.url)
  }
}
