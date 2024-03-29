import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ruta } from '../../config';
import { map, filter, scan } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { io } from 'socket.io/client-dist/socket.io';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebpayService {
  private socket;
  public webpayEndPoint: string;
  public url = "/rswebpaytransaction/api/webpay/v1.0/transactions";

  public rutaApi = Ruta.url;
  public rutaSocket = Ruta.urlSocket


  constructor(private http: HttpClient) {

    this.webpayEndPoint = Ruta.webpayroute;
  }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(this.rutaSocket);

    let observable = new Observable(observer => {
      this.socket.on('paid', (data) => {
        observer.next(data)
      });
      return () => {
        this.socket.disconnect();
      }
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('paid', data)
      }
    };

    return Rx.Subject.create(observer, observable);
  }

  create(precio) {
    let testData = {
      "amount": precio
    }
    return this.http.post(`${this.rutaApi}/pagar`, testData);

  }

  commit() {

    return this.http.put(`${this.rutaApi}/commit`, null);
  }
}
