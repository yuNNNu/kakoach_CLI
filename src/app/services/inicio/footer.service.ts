import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FooterService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = "../../../assets/json/inicio/footer.json"
  }
  getInfoFooter() {
    return this.http.get(this.url)
  }
}
