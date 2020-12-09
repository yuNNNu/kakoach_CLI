import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Importamos ruta global de la API
import { Ruta } from '../../config';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
  }

  GetUsers() {
    return this.http.get(`${this.url}/mostrar-clientes`);

  }
}
