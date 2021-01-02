import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { PrincipalImagePlansService } from '../services/planes/principal-image-plans.service';
@Injectable({
	providedIn: 'root'
})

export class PrincipalImagePlansResolver implements Resolve<Observable<any>>{
	constructor(private _plan : PrincipalImagePlansService){

	}
	
	resolve (){
		return this._plan.getPrincipalPlanImage();
		
	}
}
