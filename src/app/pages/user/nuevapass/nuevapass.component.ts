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
  public listaUsuario: any;
  public password:any;
  constructor(private user : UserService,
              private _ac : ActivatedRoute) {
  /*=========================================
  OBJETO LISTA USUARIO
  ===========================================*/
    this.listaUsuario = {
      password: null,
      password2: null

    }
  }

  public token = this._ac.snapshot.params["token"];

  ngOnInit(): void {

  }

  onSubmit(f: NgForm){

     console.log("this.password", this.password);
     console.log("token", this.token);
    this.user.updatePass(this.token, this.password).subscribe( res => {
      console.log("res", res);
      Swal.fire({
                  title: 'Cambio de contraseña realizada con éxito!',
                  icon: 'success',
                  confirmButtonText: 'OK!'
                }).then((result) => {
                  window.location.href = "/";
                })

    })

  }

}
