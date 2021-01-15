import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { LogoNavbarService } from '../services/inicio/logo-navbar.service';
@Injectable({
    providedIn: 'root'
})

export class LogoNavbarResolver implements Resolve<Observable<any>>{
    constructor(private _logo: LogoNavbarService) {

    }

    resolve() {
        return this._logo.getLogo();

    }
}
