import { Component, OnInit, Input } from '@angular/core';
import { Ruta } from '../../../config';
import { PrincipalImagePlansService } from '../../../services/planes/principal-image-plans.service';
@Component({
  selector: 'app-imagen-principal',
  templateUrl: './imagen-principal.component.html',
  styleUrls: ['./imagen-principal.component.css']
})
export class ImagenPrincipalComponent implements OnInit {

  @Input() public DOM;
  public url = Ruta.url;
  public firstImageJson: any;
  public number:any;
  constructor(private principal : PrincipalImagePlansService) {
  }

  ngOnChanges(){
     if(this.DOM == false){
       this.number = 0;
     }else{
       this.number = 1;
     }

      /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */
    this.principal.getPrincipalPlanImage()
      .subscribe(respuesta => {
        this.firstImageJson = respuesta["data"][this.number];
      })
  }

  ngOnInit(): void {
  
       /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */
    this.principal.getPrincipalPlanImage()
      .subscribe(respuesta => {
        this.firstImageJson = respuesta["data"][0];
      })
  }


}
