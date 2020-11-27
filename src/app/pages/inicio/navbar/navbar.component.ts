import { Component, OnInit } from '@angular/core';
import { LogoNavbarService } from '../../../services/inicio/logo-navbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // devuelvo json
  public imageJson: any;
  constructor(private showService: LogoNavbarService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */
    this.showService.getLogo()
      .subscribe(respuesta => {
        // pasamos la informacion recibida a la variable
        this.imageJson = respuesta[0].logo

      })
  }

  ngOnInit(): void {
  }

}
