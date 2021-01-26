import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactMeService } from '../../../services/contacto/contact-me.service';
import Swal from 'sweetalert2';
import { CaptchaService } from '../../../services/captcha/captcha.service';

@Component({
  selector: 'app-contact-body',
  templateUrl: './contact-body.component.html',
  styleUrls: ['./contact-body.component.css']
})
export class ContactBodyComponent implements OnInit {
  public datosContactMe: any;
  public login: boolean = false;
  public email: string;
  public captcha: boolean = false;
  constructor(private _contact: ContactMeService,
    private Captchaservice: CaptchaService) {

    /*=========================================
    OBJETO LISTA USUARIO
    ===========================================*/
    this.datosContactMe = {
      nombre: null,
      apellido: null,
      mail: null,
      mensaje: null
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

    if (localStorage.getItem("email")) {
      this.datosContactMe["mail"] = localStorage.getItem("email");
    } else {
      this.datosContactMe["mail"] = "";
    }



  }

  async resolved(captchaResponse: string) {
    await this.sendTokenToBackend(captchaResponse);
  }

  sendTokenToBackend(tok) {
    //calling the service and passing the token to the service
    this.Captchaservice.sendToken(tok).subscribe(
      data => {
        if (data["success"]) {
          this.captcha = true;
          return this.captcha;
        }
      },
      err => {
        console.log(err)
      },
      () => { }
    );
  }


  onSubmit(f: NgForm) {

    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;



    if (this.datosContactMe["nombre"] == "" || this.datosContactMe["apellido"] == "" || this.datosContactMe["mail"] == "" || this.datosContactMe["menaje"] == "") {

      return

    } else {
      if (this.captcha) {

        var esValido = expReg.test(this.datosContactMe["mail"]);
        if (!esValido) { 
           Swal.fire(
          'Ha ocurrido un problema!',
          'Formato de email inválido, Intente nuevamente.',
          'error'
          )
        }
        else {
          Swal.fire({
            title: '¿Está seguro de realizar esta acción?',
            text: 'Si no lo está... Puede cancelar esta acción!, asegúrese que el correo sea válido',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {

            if (result.isConfirmed) {
              this._contact.contactMe(this.datosContactMe)
                .subscribe(res => {
                  if (res["status"] !== 200) {

                    Swal.fire(
                      'Ha ocurrido un problema!',
                      'Ha existido un error del servidor, no ha sido posible enviar el correo.',
                      'error'
                    )

                  } else {

                    Swal.fire({

                      title: 'Todo ha salido bien!',
                      text: 'Su mensaje será respondido lo antes posible, gracias por la espera!.',
                      icon: 'success',
                      confirmButtonText: 'OK!'
                    }).then((result) => {
                      window.location.href = "/";
                    })

                  }
                })
            } else {

              Swal.fire(
                'Ha ocurrido un problema!',
                'Mensaje no enviado, acción cancelada!.',
                'error'
              )

            }

          })

        }
      } else {
        Swal.fire(
          'Ha ocurrido un problema!',
          'Antes de enviar el mensaje, necesita validar el captcha solicitado.',
          'error'
        )
      }
    }


  }


}
