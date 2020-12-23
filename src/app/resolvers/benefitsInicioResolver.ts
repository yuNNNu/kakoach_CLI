import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { BenefitsService } from '../services/inicio/benefits.service';
@Injectable({
	providedIn: 'root'
})

export class benefitInicioResolver implements Resolve<Observable<any>>{
	constructor(private _benefit : BenefitsService){

	}
	
	resolve (){
		return this._benefit.getBenefits();
		
	}
}
