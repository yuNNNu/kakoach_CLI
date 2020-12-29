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
      })

  }
  onSubmit(f: NgForm) {

    this.user.create(this.listaUsuario)
      .subscribe(res => {
        if (res["status"] !== 200) {

          Swal.fire(
            'Error al crear cuenta!',
            'Intentélo más tarde.',
            'error'
          )



        } else {

          Swal.fire({
             title: 'Cuenta creada con éxito',
            text: 'Se le ha enviado un mail para confirmar la verificación de usuario',
            icon: 'success',
            confirmButtonText: 'OK!'
          }).then((result) => {
            window.location.href = "/";
          })
        }
      })
      
  }
}



