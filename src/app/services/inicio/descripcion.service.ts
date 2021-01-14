import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class DescripcionService {

  public url: string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
  }
  getDescripcion() {
    return this.http.get(`${this.url}/show-info-planes-inicio`);
  }
}
