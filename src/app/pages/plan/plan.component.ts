import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PlanService } from '../../services/planes/plan.service';
import { Ruta } from '../../config';
import { ActivatedRoute } from '@angular/router';
import { WebpayService } from '../../services/webpay/webpay.service';
import { NgForm } from '@angular/forms';
import { PaidService } from './../../services/webpay/paid.service';

declare var $: any;

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {


  constructor(private _ac: ActivatedRoute,
    private webpay: WebpayService,
    private _paid: PaidService) { }

  public login: boolean = false;
  public planJson: any;
  public plans = this._ac.snapshot.data.plans.data;
  public personalplan = this._ac.snapshot.data.plan.data;
  public plan: any;
  public id = this._ac.snapshot.params["id"];
  public url = Ruta.url;
  public personal: boolean;
  public webpayurl: any;
  public token: any;
  public paid: any;
  public transaction: any;
  public price: any;
  public status: boolean;

  // status true = transaccion aceptada
  // status false = transaccion rechazada

  ngOnInit(): void {

    this.planJson = this.filteredPlan();
    console.log("planJson", this.planJson)
    this._paid.paid.subscribe(data => {
      this.paid = true;
      console.log("his.paid", this.paid);
      this.transaction = JSON.parse(data);
      console.log("this.transaction", this.transaction);

      // Condicion si la venta fue realizada con exito o fue rechazada
      if (this.transaction.response_code == 0) {
        this.status = true;
      } else {
        this.status = false;
      }


    })
    console.log("this.status", this.status);
    this.price = this.planJson[0].precio;

    if (localStorage.getItem("email")) {
      this.login = true
    } else {
      this.login = false
    }

  }



  filteredPlan() {
    let filteredPlan = this.plans.filter(res => res._id == this.id)
    this.plan = filteredPlan;
    this.personal = false;
    if (this.plan.length == 0) {
      this.personal = true;
      this.plan = this.personalplan;
    }
    return this.plan;
  }

  create() {

    if (localStorage.getItem("email")) {
      this.webpay.create(this.price).subscribe((res: any) => {
        window.open(res.url);

      })
    } else {

      this.login = false
      window.location.reload();

    }
  }

  commit() {
    this.webpay.commit().subscribe((res: any) => {
      console.log("datas", res.data);

      if (res.data.response_code == 0) {
        this.paid = true;
        console.log("dentro del commit", this.paid);
      }
    })
  }

}
