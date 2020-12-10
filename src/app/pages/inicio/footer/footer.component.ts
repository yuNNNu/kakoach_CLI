import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../../services/inicio/footer.service'
import { Ruta } from '../../../config';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public datosFooter: any;
  public alternate:boolean = true;
  public primero:boolean ;

  constructor(private info: FooterService) {
    this.info.getInfoFooter()
      .subscribe(respuesta => {
        this.datosFooter = respuesta["data"];

      })
  }

  ngOnInit(): void {
  }

  changinSide(){
    
    if (this.alternate) {
      this.alternate = false;
      this.offFirst();
    }
  }

  offFirst(){
    this.primero = false;
    return this.primero;
  }
}
