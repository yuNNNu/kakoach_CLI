import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../../config';
@Injectable({
  providedIn: 'root'
})
export class FirstImageAboutMeService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
  }
  getPrincipalImage() {
    return this.http.get(`${this.url}/mostrar-principal-img-sobremi-data`);
  }
}
