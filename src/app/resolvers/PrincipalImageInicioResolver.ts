import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FirstimageService } from '../services/inicio/firstimage.service';
@Injectable({
    providedIn: 'root'
})

export class PrincipalImageInicioResolver implements Resolve<Observable<any>>{
    constructor(private _image: FirstimageService) {

    }

    resolve() {
        return this._image.getFirstImage();

    }
}
