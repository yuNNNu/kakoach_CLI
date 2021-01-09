import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PlanService } from '../../services/planes/plan.service';
import { Ruta } from '../../config';
import { ActivatedRoute } from '@angular/router';
import { WebpayService } from '../../services/webpay/webpay.service';
import { NgForm } from '@angular/forms';
import { PaidService } from './../../services/webpay/paid.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DolarvalueService } from '../../services/dolar/dolarvalue.service';
import Swal from 'sweetalert2'


declare var $: any;


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  public usdValue: any;

  constructor(private _ac: ActivatedRoute,
    private webpay: WebpayService,
    private _paid: PaidService,
    private usd: DolarvalueService) {
  }

  public login: boolean = false;
  public planJson: any;
  public plans = this._ac.snapshot.data.plans.data;
  public personalplan = this._ac.snapshot.data.plan.data;
  public plan: any;
  public urlPlan = this._ac.snapshot.params["url"];
  public url = Ruta.url;
  public personal: boolean;
  public webpayurl: any;
  public token: any;
  public paid: any;
  public transaction: any;
  public price: any;
  public status: boolean;
  public moneyType: boolean = true;
  public dolarValue: any = this._ac.snapshot.data.dolar["serie"][0].valor;

  ngOnInit(): void {

    this.planJson = this.filteredPlan();
    console.log("this.planJson", this.planJson)
    this._paid.paid.subscribe(data => {
      this.paid = true;
      this.transaction = JSON.parse(data);
      // Condicion si la venta fue realizada con exito o fue rechazada
      // status true = transaccion aceptada
      // status false = transaccion rechazada
      if (this.transaction.response_code == 0) {

        this.status = true;
      } else {
        this.status = false;
      }
    })

    // moneyType: true = CLP
    // moneyType: false = USD

    // Valores de inicializacion del componente
    if (this.moneyType) {
      this.price = this.planJson[0].precio
    } else {

        let n;
        n = this.planJson[0].precio / this.dolarValue;
        this.price = n.toFixed(2);
        this.update();
    }

    if (localStorage.getItem("email")) {
      this.login = true
    } else {
      this.login = false
    }
  }

  // Alternado entre valores en la vista
  letClp() {
    this.moneyType ? this.moneyType = true : this.moneyType = true;
    this.price = this.planJson[0].precio
    this.update();
  }

  letUsd() {
    !this.moneyType ? this.moneyType = false : this.moneyType = false;
      if (this.dolarValue == undefined || this.dolarValue == null) {
        Swal.fire(
          'Ha ocurrido un error!',
          'De momento el tipo de pago en USD no está disponible, vuelva a elegir la opción CLP o inténtelo más tarde.',
          'error')

        this.letClp();
      } else {
        let n;
        n = this.planJson[0].precio / this.dolarValue;
        this.price = n.toFixed(2);
        this.update();
      }
  }

  returnUsd() {
    return this.usd.getDolarValue().subscribe(value => {
      this.usdValue = value["serie"][0].valor

    })
  }



  filteredPlan() {
    let filteredPlan = this.plans.filter(res => res.url == this.urlPlan)
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
      localStorage.removeItem("token")
      this.webpay.create(this.price).subscribe((res: any) => {
        localStorage.setItem("token", res.token);
        window.open(res.url);

      })
    } else {

      this.login = false
      Swal.fire(
        'Ha ocurrido un error!',
        'Para realizar la compra, por favor iniciar sesión o crearse una cuenta!.',
        'error')

    }
  }

  commit() {
    this.webpay.commit().subscribe((res: any) => {

      if (res.data.response_code == 0) {
        this.paid = true;
      }
    })
  }

  update() {
    this.ngOnInit();
  }

}
