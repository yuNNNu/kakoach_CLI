import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { PlanService } from '../services/planes/plan.service';
@Injectable({
	providedIn: 'root'
})

export class plansDataResolver implements Resolve<Observable<any>>{
	constructor(private _plan : PlanService){

	}
	
	resolve (){
		return this._plan.getPlans();
		
	}
}
