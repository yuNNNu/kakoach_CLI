import { Component, OnInit } from '@angular/core';
import { WebpayService } from '../../../services/webpay/webpay.service';
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  constructor(private _webpay : WebpayService) { }

  ngOnInit(): void {
  }

}
