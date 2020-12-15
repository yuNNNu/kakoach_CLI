import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from '../../../config';

@Component({
  selector: 'app-history-body',
  templateUrl: './history-body.component.html',
  styleUrls: ['./history-body.component.css']
})
export class HistoryBodyComponent implements OnInit {

  constructor(private _ac : ActivatedRoute) { }

  public id = this._ac.snapshot.params["id"];
  public cards = this._ac.snapshot.data.card.data;
  public card:any;
  public cardJson:any;
  public url = Ruta.url;

  ngOnInit(): void {
  	this.cardJson = this.filteredCard();
  }

  filteredCard(){
  	let filteredcard = this.cards.filter(res => res._id == this.id)
  	this.card = filteredcard;
  	return this.card;
  }
}
