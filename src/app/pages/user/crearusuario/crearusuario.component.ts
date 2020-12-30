import { Component, OnInit } from '@angular/core';
import { BorderFooterComponent } from '../../herramientas/border-footer/border-footer.component';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { UserService } from '../../../services/usuario/user.service'
import { $ } from 'protractor';
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
      password: null,
      password1: null
    }

  }

  ngOnInit(): void {
    /*=============================================
    VALIDAR FORMULARIO
    =============================================*/

    (function () {
      'use strict';
      window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();


  }



  onSubmit(f: NgForm) {

    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;



    if (this.listaUsuario["nombre"] == "" || this.listaUsuario["apellido"] == "" || this.listaUsuario["mail"] == "" || this.listaUsuario["password"] == "" || this.listaUsuario["password1"] == "") {

      return

    } else {
      var esValido = expReg.test(this.listaUsuario["mail"]);
      if (!esValido) {
        Swal.fire(
          'Formato de email invalido!',
          'Intenté nuevamente.',
          'error'
        )
      }
      else {
        console.log("En on submit", this.listaUsuario)
        if (this.listaUsuario["password"] === this.listaUsuario["password1"]) {
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
        } else {
          Swal.fire(
            'Contraseñas no coinciden!',
            'Intenté nuevamente.',
            'error'
          )
          return
        }

      }


    }





  }
}



