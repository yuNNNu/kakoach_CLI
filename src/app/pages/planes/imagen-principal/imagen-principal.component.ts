import { Component, OnInit } from '@angular/core';
import { Ruta } from '../../../config';
import { PrincipalImagePlansService } from '../../../services/planes/principal-image-plans.service';
@Component({
  selector: 'app-imagen-principal',
  templateUrl: './imagen-principal.component.html',
  styleUrls: ['./imagen-principal.component.css']
})
export class ImagenPrincipalComponent implements OnInit {


  public url = Ruta.url;
  public firstImageJson: any;
  constructor(private principal : PrincipalImagePlansService) {

  	/*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */
    this.principal.getPrincipalPlanImage()
      .subscribe(respuesta => {
        // console.log(respuesta)
        this.firstImageJson = respuesta["data"][0];
        // console.log(this.firstImageJson.imagen)
      })

  }

  ngOnInit(): void {
  }

}
