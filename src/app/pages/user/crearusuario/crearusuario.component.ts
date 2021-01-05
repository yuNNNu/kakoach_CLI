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
          'Formato de email inválido!',
          'Intente nuevamente.',
          'error'
        )
      }
      else {
        console.log("En on submit", this.listaUsuario)
        if (this.listaUsuario["password"] === this.listaUsuario["password1"]) {
          this.user.create(this.listaUsuario)
            .subscribe(res => {
              console.log("res en creacion del user", res)
              if (res["status"] == 400) {

                Swal.fire(
                  'Error',
                  res["mensaje"],
                  'error'
                )
              } else if (res["status"] == 500) {

                Swal.fire(
                  'Error',
                  res["mensaje"],
                  'error'
                )

              } else {

                Swal.fire({
                  title: 'Cuenta creada con éxito',
                  text: res["mensaje"],
                  icon: 'success',
                  confirmButtonText: 'OK!'
                }).then((result) => {
                  window.location.href = "/";
                })
              }
            })


        }
        if (this.listaUsuario["password"] !== this.listaUsuario["password1"]) {
          Swal.fire(
            'Contraseñas no coinciden!',
            'Intente nuevamente.',
            'error'
          )
          this.listaUsuario["password"] = "";
          this.listaUsuario["password1"] = "";
          return

        }

      }


    }





  }
}



