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
  public mail:any;
  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm){
  	this.user.sendRecoverPassEmail(this.mail).subscribe(res => {
      console.log("res", res);
      if(res["status"] == 200){
         Swal.fire({
                  title: 'Mail enviado con éxito!',
                  text: 'Se ha enviado un link con la recuperación de contraseña al mail ingresado.',
                  icon: 'success',
                  confirmButtonText: 'OK!'
                }).then((result) => {
                  window.location.href = "/";
                })
      }  
    })
    
  } 

}
