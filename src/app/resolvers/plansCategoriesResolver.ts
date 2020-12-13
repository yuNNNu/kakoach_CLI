import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { CategoriasService } from '../services/planes/categorias.service';
@Injectable({
	providedIn: 'root'
})

export class plansCategoriesResolver implements Resolve<Observable<any>>{
	constructor(private _categories : CategoriasService){

	}
	
	resolve (){
		return this._categories.getCategories();
		
	}
}
