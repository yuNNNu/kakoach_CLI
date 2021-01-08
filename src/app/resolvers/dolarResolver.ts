import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { DolarvalueService } from '../services/dolar/dolarvalue.service';
@Injectable({
	providedIn: 'root'
})

export class dolarResolver implements Resolve<Observable<any>>{
	constructor(private _dolar : DolarvalueService){
	}
	
	resolve (){
		return this._dolar.getDolarValue();
	}
}
