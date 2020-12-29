import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Importamos ruta global de la API
import { Ruta } from '../../config';
@Injectable({
  providedIn: 'root'
})
export class ContactMeService {
  public url: string;
  constructor(private http: HttpClient) { this.url = Ruta.url; }


  contactMe(datos) {

    console.log("datos en create service", datos)
    let testData = {
      "nombre": datos.nombre,
      "apellido": datos.apellido,
      "emailUser": datos.mail,
      "message": datos.mensaje

    }
    return this.http.post(`${this.url}/contactme-mail`, testData);

  }
}
