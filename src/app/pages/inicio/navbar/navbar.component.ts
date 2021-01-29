import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogoNavbarService } from '../../../services/inicio/logo-navbar.service';
import { UserService } from '../../../services/usuario/user.service';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from '../../../config';
import Swal from 'sweetalert2';
import notie from 'notie'
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  public navbarLogo: any;
  constructor(private user: UserService, private _ac: ActivatedRoute, private _lg: LogoNavbarService) {

    /*=========================================
    OBJETO LISTA USUARIO
    ===========================================*/
    this.listaUsuario = {
      mail: null,
      password: null
    }
    this._lg.getLogo().subscribe(x => {
      this.navbarLogo = x["data"][0]["imagen"];
    })
  }
  public probando = this._ac.snapshot.data.lg;


  public login: boolean = false;
  public animated: boolean = false;
  public listaUsuario: any;
  public url = Ruta.url;
  public nombrecli: any;
  // devuelvo json
  public imagen: any;
  @Input() public Animated;
  @Input() public Login;

  ngOnInit(): void {

    if (localStorage.getItem("email")) {
      this.login = true
    } else {
      this.login = false
    }

  }

  ngOnChanges() {
    this.animated = this.Animated;
    this.login = this.Login;
    this.ngOnInit();
  }

  // metodo for log ou
  salir() {
    this.animated = true;
    this.login = false;
    localStorage.removeItem("email");
    localStorage.removeItem("login");
    localStorage.clear();

    if (window.location.pathname == "/contactame") {
      window.location.href = "/";
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  onSubmit(f: NgForm) {

    this.user.loginCliente(this.listaUsuario)
      .subscribe(res => {
        if (res["status"] == 200) {
          // Swal.fire(
          //   "Bienvenido",
          //   "",
          //   'success')
          let nombre = this.capitalizeFirstLetter(res["nombre"]);
          notie.alert(4, `Bienvenido!, ${nombre}`, 2)
        }
        let usr = res;
        if (usr["mensaje"] == "ok") {
          if (usr["verified"] == true) {
            this.animated = true;
            this.login = true;
            if (window.location.pathname == "/contactame") {
              window.location.href = "/";

            }
            localStorage.setItem("email", this.listaUsuario["mail"])

          } else {
            Swal.fire(
              'Ha ocurrido un problema!',
              'Antes de ingresar, primero necesita validar su usuario con el link enviado a su correo.',
              'error')

            this.login = false;

          }

        } else {
          Swal.fire(
            'Ha ocurrido un problema!',
            usr["mensaje"],
            'error')

          this.login = false;
        }
      })
  }

}
