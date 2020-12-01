import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class InlvlService {

	public lvl = new BehaviorSubject<boolean>(false);
	cast = this.lvl.asObservable();

  	constructor() { }

 	seeLvl(newLvl){
    	this.lvl.next(newLvl);
    }
}
