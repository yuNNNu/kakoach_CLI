import { Component, OnInit } from '@angular/core';
import { BorderFooterComponent } from '../../herramientas/border-footer/border-footer.component';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { UserService } from '../../../services/usuario/user.service'
import { $ } from 'protractor';
import { CaptchaService } from '../../../services/captcha/captcha.service';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {
  public listaUsuario: any;
  public captcha:boolean = false;
  constructor(private user: UserService,
              private Captchaservice: CaptchaService) {
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

  async resolved(captchaResponse: string){
    console.log(`Resolved response token: ${captchaResponse}`)
    await this.sendTokenToBackend(captchaResponse);
  }

  sendTokenToBackend(tok){
  //calling the service and passing the token to the service
    this.Captchaservice.sendToken(tok).subscribe(
      data => {
        console.log(data["success"])
        if(data["success"]){
          this.captcha = true;
          console.log("this.captcha en subscribe", this.captcha);
          return this.captcha;
        }
      },
      err => {
        console.log(err)
      },
      () => {}
    );
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
        console.log("this.captcha en el if", this.captcha);
        if(this.captcha){ 

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
        }else{
           Swal.fire(
              'Ha ocurrido un problema!',
              'Antes de registrarse, necesita validar el captcha solicitado.',
              'error'
            )
        }
      }


    }





  }
}



