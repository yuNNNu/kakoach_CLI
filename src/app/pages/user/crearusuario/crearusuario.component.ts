import { Component, OnInit } from '@angular/core';
import { BorderFooterComponent } from '../../herramientas/border-footer/border-footer.component';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
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

    Swal.fire({
      title: 'Esta correcto el correo?',
      text: 'Si no lo está... Puede cancelar esta acción!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result) {
        this.user.create(this.listaUsuario)
          .subscribe(res => {
            console.log("res form user", res["status"])
            if (res["status"] !== 200) {

              Swal.fire(
                'Error al crear cuenta!',
                'intentelo mas tarde',
                'error'
              )

            } else {

              Swal.fire(
                'Cuenta creada con exito',
                'Vea confirmacion en su bandeja del email',
                'success'
              )
            }
          })
      }
    })
  }


}
