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
      title: '¿Está seguro de realizar esta acción?',
      text: 'Si no lo está... Puede cancelar esta acción!, asegúrese que el correo sea válido',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      console.log("result", result);

      if (result.isConfirmed) {
        this._contact.contactMe(this.datosContactMe)
          .subscribe(res => {
            console.log("res form user", res["status"])
            if (res["status"] !== 200) {

              Swal.fire(
                'Error al enviar el correo!',
                'Ha existido un error del servidor, no ha sido posible enviar el correo.',
                'error'
              )

            } else {

              Swal.fire(
                'Mensaje enviado',
                'Su mensaje será respondido lo antes posible, gracias por la espera!.',
                'success'
              )

            }
          })
      }else{

        Swal.fire(
                'Mensaje no enviado',
                'Acción cancelada!.',
                'error'
              )

      }

    })


  }


}
