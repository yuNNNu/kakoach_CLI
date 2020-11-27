import { Component, OnInit } from '@angular/core';
import { FirstimageService } from '../../../services/inicio/firstimage.service';
@Component({
  selector: 'app-principalimage',
  templateUrl: './principalimage.component.html',
  styleUrls: ['./principalimage.component.css']
})
export class PrincipalimageComponent implements OnInit {
  // devuelvo json
  public firstImageJson: any;

  constructor(private firstImage: FirstimageService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */
    this.firstImage.getFirstImage()
      .subscribe(respuesta => {
        // console.log(respuesta)
        this.firstImageJson = respuesta;
        // console.log(this.firstImageJson.imagen)
      })
  }

  ngOnInit(): void {
  }

}
