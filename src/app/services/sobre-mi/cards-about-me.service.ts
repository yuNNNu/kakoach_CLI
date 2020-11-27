import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardsAboutMeService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = "../../../assets/json/sobre-mi/cards.json"
  }
  getCard() {
    return this.http.get(this.url)
  }
}
