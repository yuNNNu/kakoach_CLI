import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DeformassPrincipalImgDataService {

  private defmassswitch = new BehaviorSubject<boolean>(true);
  cast = this.defmassswitch.asObservable();
  constructor() { }
  changeImg(switchData){
  	this.defmassswitch.next(switchData);
  }
}
