import { Component, OnInit } from '@angular/core';
import { BorderFooterComponent } from '../../herramientas/border-footer/border-footer.component';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../services/usuario/user.service'
@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {
  public allUser
  public listaUsuario: any;
  constructor(private user: UserService) {
    /*=========================================
  OBJETO LISTA USUARIO
  ===========================================*/
    this.listaUsuario = {
      nombre: null,
      apellido: null,
      mail: null,
      password: null
    }

  }

  ngOnInit(): void {
    this.user.GetUsers()
      .subscribe(res => {
        this.allUser = res["data"]
        // RECIBE USERS
        console.log("users", this.allUser)
      })

  }
  onSubmit(f: NgForm) {
    console.log("lista usuario en onsubmit", this.listaUsuario)
    // this.user.GetUsers()
    //   .subscribe(res => {
    //     console.log("res del getUser", res)
    //   })

    this.user.create(this.listaUsuario)
      .subscribe(res => {
        console.log("res form user", res)
      })
  }


}
