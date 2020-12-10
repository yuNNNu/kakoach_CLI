import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogoNavbarService } from '../../../services/inicio/logo-navbar.service';
import { UserService } from '../../../services/usuario/user.service';
import { Ruta } from '../../../config';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public login: boolean = false;
  public listaUsuario: any;
  public url = Ruta.url;
  // devuelvo json
  public imageJson: any;
  constructor(private logo: LogoNavbarService, private user: UserService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */
    this.logo.getLogo()
      .subscribe(respuesta => {
        console.log("respuesta", respuesta);
        // pasamos la informacion recibida a la variable
        this.imageJson = respuesta["data"][0]

      })

    /*=========================================
   OBJETO LISTA USUARIO
    ===========================================*/
    this.listaUsuario = {
      mail: null,
      password: null
    }
  }

  ngOnInit(): void {
  }
  // metodo for log ou
  salir() {
    this.login = false;
  }
  onSubmit(f: NgForm) {
    console.log(this.listaUsuario)
    this.user.GetUsers()
      .subscribe(res => {
        console.log("res del getUser", res)
      })

    this.user.loginCliente(this.listaUsuario)
      .subscribe(res => {
        console.log("Res del login", res)
        let usr = res;
        if (usr["mensaje"] == "ok") {
          this.login = true;
        } else {
          this.login = false;
        }
      })
  }

}
