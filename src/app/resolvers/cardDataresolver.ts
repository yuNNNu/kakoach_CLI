import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { CardsAboutMeService } from '../services/sobre-mi/cards-about-me.service';
@Injectable({
	providedIn: 'root'
})

export class cardResolver implements Resolve<Observable<any>>{
	constructor(private _card : CardsAboutMeService){

	}
	
	resolve (){
		return this._card.getCard();
		
	}
}
