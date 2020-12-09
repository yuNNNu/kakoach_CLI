import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  // traer todos los clientes
  GetUsers() {
    return this.http.get(`${this.url}/mostrar-clientes`);

  }
  // LOGIN 
  loginCliente(listaCliente) {
    const headers = new HttpHeaders();
    return this.http.post(`${this.url}/login-usuario`, listaCliente, { headers })
  }

}
