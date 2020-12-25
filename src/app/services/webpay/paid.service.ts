import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebpayService } from '../../services/webpay/webpay.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PaidService {
  
  paid: Subject<any>;
  
  // Our constructor calls our wsService connect method
  constructor(private webpay: WebpayService) {
    this.paid = <Subject<any>>webpay
      .connect()
      .pipe(
            map((response: any): any => {
            return response;
        }))
   }


}