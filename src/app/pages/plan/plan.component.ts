import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/planes/plan.service';
import { Ruta } from '../../config';
import { ActivatedRoute } from '@angular/router';
import { WebpayService } from '../../services/webpay/webpay.service';
import { NgForm } from '@angular/forms';
import { PaidService } from './../../services/webpay/paid.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {


  constructor(private _ac : ActivatedRoute,
              private webpay : WebpayService,
              private _paid : PaidService) { }
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

  ngOnInit(): void {

  	this.planJson = this.filteredPlan();

    this._paid.paid.subscribe(data => {
      this.paid = true;
      console.log("his.paid", this.paid);
      this.transaction = JSON.parse(data);
      console.log("this.transaction", this.transaction);
     
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
     this.webpay.create().subscribe((res:any) => {
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

}
