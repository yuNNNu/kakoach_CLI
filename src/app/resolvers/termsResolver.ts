import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { terminosyCondicionesService } from '../services/terminos/terminosycondiciones.service'
@Injectable({
	providedIn: 'root'
})

export class termsResolver implements Resolve<Observable<any>>{
	constructor(private _terms : terminosyCondicionesService){

	}
	
	resolve (){
		return this._terms.getTerms();
		
	}
}
