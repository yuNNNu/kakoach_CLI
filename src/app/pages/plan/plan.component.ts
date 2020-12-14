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
  public plan:any;
  public id = this._ac.snapshot.params["id"];
  public url = Ruta.url;

  ngOnInit(): void {

  	this.planJson = this.filteredPlan();
  }

  filteredPlan(){
  	let filteredPlan = this.plans.filter(res => res._id == this.id)
  	this.plan = filteredPlan;
  	return this.plan;
  }

}
