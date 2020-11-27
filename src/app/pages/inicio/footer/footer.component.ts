import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../../services/inicio/footer.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public datosFooter: any;
  constructor(private info: FooterService) {
    this.info.getInfoFooter()
      .subscribe(respuesta => {
        this.datosFooter = respuesta;
      })
  }

  ngOnInit(): void {
  }

}
