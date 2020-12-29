import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactMeService } from '../../../services/contacto/contact-me.service'
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

    this._contact.contactMe(this.datosContactMe)
      .subscribe(res => {
        console.log("res form user", res)
      })
  }

}
