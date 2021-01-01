import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-coleccion-historia',
  templateUrl: './coleccion-historia.component.html',
  styleUrls: ['./coleccion-historia.component.css']
})
export class ColeccionHistoriaComponent implements OnInit {

  public cardsRendered: Event;
  constructor() {
  }
  ngOnInit(): void {

  }

  cardsIsRendered(event: Event){
    this.cardsRendered = event;
  }

}
