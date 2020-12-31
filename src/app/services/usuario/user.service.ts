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
  create(datos) {

    console.log("datos en create service", datos)
    let testData = {
      "nombre": datos.nombre,
      "apellido": datos.apellido,
      "mail": datos.mail,
      "password": datos.password

    }
    return this.http.post(`${this.url}/crear-cliente`, testData);

  }

  updatePass(newpass, id){
    let newPass = {
      "password": newpass
    }

    return this.http.put(`${this.url}/editar-cliente/${id}`, newpass);
  }

}
