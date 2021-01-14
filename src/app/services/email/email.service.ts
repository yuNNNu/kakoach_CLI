import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../../config';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
  }

  sendPdf(data) {
    let testData = {
      "emailUser": localStorage.getItem("email"),
      "pdf": data.pdf,
      "data": data.datosVenta

    }
    return this.http.post(`${this.url}/send-mail`, testData);

  }

  recoverPass(mail, token) {

    let data = {
      "mail": mail
    }

    return this.http.post(`${this.url}/recover-pass/${token}`, data);

  }

}
