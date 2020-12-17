import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { PersnalPlanService } from '../services/inicio/persnal-plan.service';
@Injectable({
	providedIn: 'root'
})

export class plansPersonalResolver implements Resolve<Observable<any>>{
	constructor(private _plan : PersnalPlanService){

	}
	
	resolve (){
		return this._plan.getPersonalPlan();
		
	}
}
