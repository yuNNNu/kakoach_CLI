import { Component, OnInit } from '@angular/core';
import { FirstimageService } from '../../../services/inicio/firstimage.service';
import { SocialMediaService } from '../../../services/herramienta/social-media.service';
import { Ruta } from '../../../config';
@Component({
  selector: 'app-principalimage',
  templateUrl: './principalimage.component.html',
  styleUrls: ['./principalimage.component.css']
})
export class PrincipalimageComponent implements OnInit {
  // devuelvo json
  public firstImageJson: any;
  public instagram:any;
  public url = Ruta.url;
  constructor(private firstImage: FirstimageService,
              private social: SocialMediaService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */
    this.firstImage.getFirstImage()
      .subscribe(respuesta => {
        // console.log(respuesta)
        this.firstImageJson = respuesta["data"][0];
        // console.log(this.firstImageJson.imagen)
      })

    this.social.getUrl()
    .subscribe(res => {
      this.instagram = res["data"][0];
    })
  }

  ngOnInit(): void {
  }

}
