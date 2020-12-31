import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../../services/herramienta/social-media.service';
import { Ruta} from '../../../config';
@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  public instagram:any;
  public facebook:any;
  public youtube:any;
  public twitter:any;
  constructor(private social: SocialMediaService) {
  }

  ngOnInit(): void {
          this.social.getUrl()
      .subscribe(res => {
        this.instagram = res["data"][0];
      })

      this.social.getUrl()
      .subscribe(res => {
        this.facebook = res["data"][1];
      })

       this.social.getUrl()
      .subscribe(res => {
        this.youtube = res["data"][2];
      })

      this.social.getUrl()
      .subscribe(res => {
        this.twitter = res["data"][3];
      })
  }

}
