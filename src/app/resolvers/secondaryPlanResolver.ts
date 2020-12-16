import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { SecondaryPlansService } from '../services/inicio/secondaryplans.service';
@Injectable({
	providedIn: 'root'
})

export class secondaryPlanResolver implements Resolve<Observable<any>>{
	constructor(private _plans : SecondaryPlansService){

	}
	
	resolve (){
		return this._plans.getSecondaryPlans();
		
	}
}
