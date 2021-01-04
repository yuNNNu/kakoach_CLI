import { Component, OnInit } from '@angular/core';
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
  // devuelvo json
  public imageJson: any;
  public imagen:any;
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
  }
  // metodo for log ou
  salir() {
    this.animated = true;
    this.login = false;
    localStorage.removeItem("email");
    localStorage.removeItem("login");

  }

  onSubmit(f: NgForm) {


    this.user.loginCliente(this.listaUsuario)
      .subscribe(res => {
        let usr = res;

        if (usr["mensaje"] == "ok") {
          if(usr["verified"] == true){
            this.animated = true;
            this.login = true;
            localStorage.setItem("email", this.listaUsuario["mail"])
            localStorage.setItem("login", "true")
          }else{
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
