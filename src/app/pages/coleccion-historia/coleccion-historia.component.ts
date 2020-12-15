import { Component, OnInit } from '@angular/core';
import { CardsAboutMeService } from '../../services/sobre-mi/cards-about-me.service'
import { SocialMediaService } from '../../services/herramienta/social-media.service';
import { Ruta} from '../../config';
@Component({
  selector: 'app-coleccion-historia',
  templateUrl: './coleccion-historia.component.html',
  styleUrls: ['./coleccion-historia.component.css']
})
export class ColeccionHistoriaComponent implements OnInit {
  public cardsJson: any;
  public url = Ruta.url;
  public instagram:any;
  public facebook:any;
  public youtube:any;
  public twitter:any;
  constructor(private card: CardsAboutMeService,
              private social: SocialMediaService) {
    this.card.getCard().subscribe(res => {
        this.cardsJson = res["data"];
     })

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
  ngOnInit(): void {
  }

}
