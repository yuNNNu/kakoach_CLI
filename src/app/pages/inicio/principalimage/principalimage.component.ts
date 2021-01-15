import { Component, OnInit, Input } from '@angular/core';
import { FirstimageService } from '../../../services/inicio/firstimage.service';
import { SocialMediaService } from '../../../services/herramienta/social-media.service';
import { Ruta } from '../../../config';
@Component({
  selector: 'app-principalimage',
  templateUrl: './principalimage.component.html',
  styleUrls: ['./principalimage.component.css']
})
export class PrincipalimageComponent implements OnInit {
  @Input() public PrincipalImage;
  // devuelvo json
  public firstImageJson: any;
  public instagram: any;
  public url = Ruta.url;

  constructor(private firstImage: FirstimageService,
    private social: SocialMediaService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */

    this.social.getUrl()
      .subscribe(res => {
        this.instagram = res["data"][0];
      })
  }

  ngOnInit(): void {

  }

}
