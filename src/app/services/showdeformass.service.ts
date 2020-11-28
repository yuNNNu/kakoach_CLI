import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DefinitionormassComponent } from '../pages/planes/definitionormass/definitionormass.component';

@Injectable({
  providedIn: 'root'
})
export class ShowdeformassService {

	public show = new BehaviorSubject<boolean>(false);
	cast = this.show.asObservable();
  	constructor() {

    }

    seeView(newShow){
    	this.show.next(newShow);
    }
}
