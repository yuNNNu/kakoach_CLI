import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/planes/plan.service';
import { Ruta } from '../../config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {


  constructor(private _ac : ActivatedRoute) { }
  public planJson:any;
  public plans = this._ac.snapshot.data.plans.data;
  public personalplan = this._ac.snapshot.data.plan.data;
  public plan:any;
  public id = this._ac.snapshot.params["id"];
  public url = Ruta.url;
  public personal:boolean;

  ngOnInit(): void {

  	this.planJson = this.filteredPlan();
    console.log("this.planJson", this.planJson);
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

}
