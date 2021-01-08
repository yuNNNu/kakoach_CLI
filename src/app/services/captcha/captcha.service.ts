import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ruta } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
	public url:any;
  constructor(private http: HttpClient) {
  	this.url = Ruta.url;
  }

  sendToken(token){
  	return this.http.post<any>(`${this.url}/validate-captcha`, {recaptcha: token});
  }
}
