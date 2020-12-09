import { Component, OnInit } from '@angular/core';
import { BorderFooterComponent } from '../../herramientas/border-footer/border-footer.component';
import { UserService } from '../../../services/usuario/user.service'
@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {
  public allUser
  constructor(private user: UserService) {

  }

  ngOnInit(): void {
    this.user.GetUsers()
      .subscribe(res => {
        this.allUser = res["data"]
        // RECIBE USERS
        console.log("users", this.allUser)
      })

  }


}
