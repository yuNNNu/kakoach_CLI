import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { FirstImageAboutMeService } from '../services/sobre-mi/first-image-about-me.service';
@Injectable({
	providedIn: 'root'
})

export class FirstImageSobreMiResolver implements Resolve<Observable<any>>{
	constructor(private _imagenSobreMi : FirstImageAboutMeService){

	}
	
	resolve (){
		return this._imagenSobreMi.getPrincipalImage();
		
	}
}
