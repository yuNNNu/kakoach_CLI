import { Component, OnInit } from '@angular/core';
import { CardsAboutMeService } from '../../services/sobre-mi/cards-about-me.service'
@Component({
  selector: 'app-coleccion-historia',
  templateUrl: './coleccion-historia.component.html',
  styleUrls: ['./coleccion-historia.component.css']
})
export class ColeccionHistoriaComponent implements OnInit {
  public cardsJson: any;
  constructor(private card: CardsAboutMeService) {
    this.card.getCard()
      .subscribe(res => {
        console.log(res[0])
        this.cardsJson = res;
      })
  }

  ngOnInit(): void {
  }

}
