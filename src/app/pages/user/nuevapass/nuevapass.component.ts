import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/usuario/user.service';

@Component({
  selector: 'app-nuevapass',
  templateUrl: './nuevapass.component.html',
  styleUrls: ['./nuevapass.component.css']
})
export class NuevapassComponent implements OnInit {
  
  public listaPass: any;
  constructor(private user : UserService) {
  /*=========================================
  OBJETO LISTA USUARIO
  ===========================================*/
    this.listaPass = {
      pass: null,
      pass2: null

    }
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){

    // if(this.listaPass.pass == this.listaPass.pass2){
    //   let newpass = this.listaPass.pass;
    //   let id = 
    //   this.user.updatePass(newpass, ).subscribe(res => {

    //   })

    // }

  }

}
