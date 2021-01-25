import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../../services/usuario/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-body-recuperar-pw',
  templateUrl: './body-recuperar-pw.component.html',
  styleUrls: ['./body-recuperar-pw.component.css']
})
export class BodyRecuperarPwComponent implements OnInit {
  public mail: any;
  constructor(private user: UserService) { }

  ngOnInit(): void {

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

    if (this.mail == "") {
      return;
    } else {

      var esValido = expReg.test(this.mail);
      if (!esValido) {
        Swal.fire(
          'Ha ocurrido un problema!',
          'Formato de email inválido, Intente nuevamente.',
          'error'
        )
      } else {
        this.user.sendRecoverPassEmail(this.mail).subscribe(res => {

          if (res["status"] == 200) {
            Swal.fire({
              title: 'Todo ha salido bien!',
              text: 'Mail enviado con éxito, se ha enviado un link con la recuperación de contraseña al mail ingresado.',
              icon: 'success',
              confirmButtonText: 'OK!'
            }).then((result) => {
              window.location.href = "/";
            })
          } else {
            Swal.fire(
              'Ha ocurrido un problema',
              res["mensaje"],
              'error'
            )
          }

        })
      }
    }
  }

}
