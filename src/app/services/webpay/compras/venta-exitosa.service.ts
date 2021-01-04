import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../../../config';
@Injectable({
  providedIn: 'root'
})
export class VentaExitosaService {

  constructor(private http: HttpClient) { }

  registrarVenta(datos) {
    let testData = {
      "mail": datos.mail,
      "nombre_plan": datos.nombre_plan,
      "id": datos.id,
      "precio": datos.precio,
      "nro_venta": datos.nro_venta,
      "fecha_venta": datos.fecha_venta,
      "session_id": datos.session_id,
      "token": datos.token
    }
    return this.http.post(`${Ruta.url}/registro-venta`, testData);
  }
}
