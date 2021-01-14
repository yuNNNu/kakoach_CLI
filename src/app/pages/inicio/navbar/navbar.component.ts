import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogoNavbarService } from '../../../services/inicio/logo-navbar.service';
import { UserService } from '../../../services/usuario/user.service';
import { Ruta } from '../../../config';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public login: boolean = false;
  public animated: boolean = false;
  public listaUsuario: any;
  public url = Ruta.url;
  public nombrecli: any;
  // devuelvo json
  public imageJson: any;
  public imagen: any;
  @Input() public Token;
  constructor(private logo: LogoNavbarService, private user: UserService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */

    /*=========================================
   OBJETO LISTA USUARIO
    ===========================================*/
    this.listaUsuario = {
      mail: null,
      password: null
    }
  }

  ngOnInit(): void {

    this.logo.getLogo()
      .subscribe(respuesta => {
        // pasamos la informacion recibida a la variable
        this.imageJson = respuesta["data"][0]

      })

    if (localStorage.getItem("email")) {
      this.login = true
    } else {
      this.login = false
    }

    if (this.Token != undefined) {
      this.logIn(this.Token);
    }

  }
  // metodo for log ou
  salir() {
    this.animated = true;
    this.login = false;
    localStorage.removeItem("email");
    localStorage.removeItem("login");
    localStorage.clear();

    if (window.location.pathname == "/contact" || window.location.pathname == "/crear-usuario") {
      window.location.replace("/");
    }



  }

  logIn(token) {
    this.user.loginToken(token).subscribe(res => {

      if (res["status"] == 200) {
        // if ()
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

  onSubmit(f: NgForm) {


    this.user.loginCliente(this.listaUsuario)
      .subscribe(res => {
        let usr = res;

        if (usr["mensaje"] == "ok") {
          if (usr["verified"] == true) {
            this.animated = true;
            this.login = true;
            if (window.location.pathname == "/contact" || window.location.pathname == "/crear-usuario") {
              window.location.replace("/");
            }
            localStorage.setItem("email", this.listaUsuario["mail"])




          } else {
            Swal.fire(
              'No ha sido posible logearse!',
              'Antes de ingresar, primero necesita validar su usuario con el link enviado a su correo.',
              'error')

            this.login = false;


          }

        } else {
          Swal.fire(
            'No ha sido posible logearse!',
            usr["mensaje"],
            'error')

          this.login = false;
        }
      })
  }

}
