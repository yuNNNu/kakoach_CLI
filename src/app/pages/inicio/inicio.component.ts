import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/usuario/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _ac: ActivatedRoute, private user: UserService) { }

  public plans = this._ac.snapshot.data.plans.data;
  public secondary = this._ac.snapshot.data.secondaryplans.data;
  public benefits = this._ac.snapshot.data.benefits.data;
  public Token = this._ac.snapshot.params.token;
  public animated:any;
  public login:any;

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    if (this.Token != undefined) {
      this.logIn(this.Token);
    }

  }

  logIn(token) {
  this.user.loginToken(token).subscribe(res => {

    if (res["status"] == 200) {
      localStorage.setItem("email", res["cliente"]["mail"]);
      localStorage.setItem("nombre", res["cliente"]["nombre"]);
      localStorage.setItem("apellido", res["cliente"]["apellido"]);
      this.animated = true;
      this.login = true;
      Swal.fire(
        'Bienvenido a Ka Koach!',
        'Cuenta Validada!',
        'success')
    } else if (res["status"] == 400) {
      Swal.fire(
        'No ha sido posible logearse!',
        'El link ha caducado.',
        'error')
    } else {
      Swal.fire(
        'No ha sido posible logearse!',
        'Antes de ingresar, primero necesita validar su usuario con el link enviado a su correo.',
        'error')
      }
    })
  }
}
