import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/planes/plan.service';
import { Ruta } from '../../config';
import { ActivatedRoute } from '@angular/router';
import { WebpayService } from '../../services/webpay/webpay.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {


  constructor(private _ac : ActivatedRoute,
              private webpay : WebpayService) { }
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

  ngOnInit(): void {

  	this.planJson = this.filteredPlan();

    console.log(this.paid);
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
