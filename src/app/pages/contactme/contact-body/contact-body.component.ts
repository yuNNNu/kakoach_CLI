import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactMeService } from '../../../services/contacto/contact-me.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contact-body',
  templateUrl: './contact-body.component.html',
  styleUrls: ['./contact-body.component.css']
})
export class ContactBodyComponent implements OnInit {
  public datosContactMe: any;
  constructor(private _contact: ContactMeService) {
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
  }

  onSubmit(f: NgForm) {
    console.log("lista usuario en onsubmit", this.datosContactMe)
    // this.user.GetUsers()
    //   .subscribe(res => {
    //     console.log("res del getUser", res)
    //   })


    Swal.fire({
      title: 'Esta correcto el correo?',
      text: 'Si no lo está... Puede cancelar esta acción!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result) {
        this._contact.contactMe(this.datosContactMe)
          .subscribe(res => {
            console.log("res form user", res["status"])
            if (res["status"] !== 200) {

              Swal.fire(
                'Error al enviar el correo!',
                'El correo no se ha enviado',
                'error'
              )

            } else {

              Swal.fire(
                'Mensaje enviado',
                'Si la direccion de correo existe, revisa tu bandeja',
                'success'
              )
            }
          })
      }

    })


  }

}
