import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../../config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogoNavbarService {
  public url: string;
  // 
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
  }
  // traer logo mediante el protocolo http
  getLogo() {
    return this.http.get(`${this.url}/show-data-logo`).pipe(catchError(err => {
      return err;
    }))
  }
}


