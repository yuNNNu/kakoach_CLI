import { SocialMediaService } from '../services/herramienta/social-media.service';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
@Injectable({
	providedIn: 'root'
})

export class socialMediaResolver implements Resolve<Observable<any>>{
	constructor(private _social : SocialMediaService){

	}
	
	resolve (){
		return this._social.getUrl();
		
	}
}
