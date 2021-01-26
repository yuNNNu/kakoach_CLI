import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/usuario/user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevapass',
  templateUrl: './nuevapass.component.html',
  styleUrls: ['./nuevapass.component.css']
})
export class NuevapassComponent implements OnInit {
  public password: any;
  public password2: any;
  constructor(private user: UserService,
    private _ac: ActivatedRoute) {
  }

  public token = this._ac.snapshot.params["token"];

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

    if (this.password !== this.password2) {
      Swal.fire(
        'Ha ocurrido un problema!',
        'Contraseñas no coinciden, Intente nuevamente.',
        'error'
      )
      this.password = "";
      this.password2 = "";
      return;
    } else {
      this.user.updatePass(this.token, this.password).subscribe(res => {
        if (res["status"] == 400) {

          console.log("🚀 ~ file: nuevapass.component.ts ~ line 56 ~ NuevapassComponent ~ this.user.updatePass ~ res", res)
          Swal.fire({
            title: 'Ha ocurrido un problema!',
            text: res["mensaje"],
            icon: 'error',
            confirmButtonText: 'OK!'
          }).then((result) => {
            window.location.href = "/";
          })
        } else {

          Swal.fire({
            title: 'Todo ha salido bien!',
            text: 'Cambio de contraseña realizada con éxito, porfavor logearse.',
            icon: 'success',
            confirmButtonText: 'OK!'
          }).then((result) => {
            window.location.href = "/";
          })
        }

      })
    }
  }

}
