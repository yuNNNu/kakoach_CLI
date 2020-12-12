import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { CategoriasService } from '../services/planes/categorias.service';
@Injectable({
	providedIn: 'root'
})

export class plansDataResolver implements Resolve<Observable<any>>{
	constructor(private _api : CategoriasService){

	}
	
	resolve (){
		return this._api.getCategories();
	}
}