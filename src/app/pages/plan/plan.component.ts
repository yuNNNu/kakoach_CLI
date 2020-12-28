import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PlanService } from '../../services/planes/plan.service';
import { Ruta } from '../../config';
import { ActivatedRoute } from '@angular/router';
import { WebpayService } from '../../services/webpay/webpay.service';
import { NgForm } from '@angular/forms';
import { PaidService } from './../../services/webpay/paid.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DolarvalueService } from '../../services/dolar/dolarvalue.service';
declare var $:any;

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  public usdValue:any;

  constructor(private _ac : ActivatedRoute,
              private webpay : WebpayService,
              private _paid : PaidService,
              private usd : DolarvalueService) {
              }


  public planJson:any;
  public plans = this._ac.snapshot.data.plans.data;
  public personalplan = this._ac.snapshot.data.plan.data;
  public plan:any;
  public id = this._ac.snapshot.params["id"];
  public url = Ruta.url;
  public personal:boolean;
  public webpayurl:any;
  public token:any;
  public paid:any;
  public transaction:any;
  public price:any;
  public status:boolean;
  public moneyType:boolean = true;


  ngOnInit(): void {

  	this.planJson = this.filteredPlan();

    this._paid.paid.subscribe(data => {
      this.paid = true;
      console.log("his.paid", this.paid);
      this.transaction = JSON.parse(data);
      console.log("this.transaction", this.transaction);

      // Condicion si la venta fue realizada con exito o fue rechazada
      // status true = transaccion aceptada
      // status false = transaccion rechazada
      if(this.transaction.response_code == 0){
        this.status = true;
      }else{
        this.status = false;
      }
     
    })

    // moneyType: true = CLP
    // moneyType: false = USD
    if(this.moneyType){
      this.price = this.planJson[0].precio
      console.log("this.price", this.price);
    }else{
      this.usd.getDolarValue().subscribe(value => {
          let n;
          this.usdValue = value["serie"][0].valor
          n = this.planJson[0].precio/this.usdValue;     
          this.price = n.toFixed(2);   
          this.update();
          console.log("this.price", this.price);
       })
    }
  }

  letClp(){
    this.moneyType ? this.moneyType = true : this.moneyType = true;
    this.price = this.planJson[0].precio
    this.update();
  }

  letUsd(){
    !this.moneyType ? this.moneyType = false : this.moneyType = false;
     this.usd.getDolarValue().subscribe(value => {
        let n;
        this.usdValue = value["serie"][0].valor
        n = this.planJson[0].precio/this.usdValue;     
        // this.price = n.toFixed(2);
        this.price = 1,41;   
        this.update();
        console.log("this.price", this.price);
     })
  }

  returnUsd(){
    return this.usd.getDolarValue().subscribe(value => {
                  this.usdValue = value["serie"][0].valor
                  
                })
  }

  filteredPlan(){
  	let filteredPlan = this.plans.filter(res => res._id == this.id)
  	this.plan = filteredPlan;
    this.personal = false;
     if(this.plan.length == 0){
       this.personal = true;
       this.plan = this.personalplan;
     }
  	return this.plan;
  }

  create(){
     
     this.webpay.create(this.price).subscribe((res:any) => {
       window.open(res.url);

    })
  }

   commit(){
   this.webpay.commit().subscribe((res:any) => {
      console.log("datas", res.data);

      if(res.data.response_code == 0){
        this.paid = true;
        console.log("dentro del commit", this.paid);
      }
   })
  }

  update(){
    this.ngOnInit();
  }

}
