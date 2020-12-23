import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ruta } from '../../config';
import { environment } from '../../enviroment';
@Injectable({
  providedIn: 'root'
})
export class WebpayService {

 public webpayEndPoint: string;
 public url = "/rswebpaytransaction/api/webpay/v1.0/transactions";
 public testData = {
 	"buy_order": "ordenCompra12345678",
 	"session_id": "sesion1234557545",
 	"amount": 13999,
 	"return_url": "http://localhost:4000/commit"
 }

 public rutaApi = Ruta.url;



  constructor(private http:HttpClient) {
  
  	this.webpayEndPoint = Ruta.webpayroute;
  }

  create(){

  	return this.http.post(`${this.rutaApi}/pagar`, this.testData);
 
  }

  commit(){
    
    return this.http.put(`${this.rutaApi}/commit`, null);
  }
}
