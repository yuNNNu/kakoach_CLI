import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta} from '../../../config';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private _ac : ActivatedRoute) { }
  @Output() public cardsRendered: EventEmitter<boolean> = new EventEmitter();

  public isRendered:boolean = false;
  public cardsJson = this._ac.snapshot.data.cards.data;
  public socialJson = this._ac.snapshot.data.social;
  public url = Ruta.url;
  public instagram:any = this.socialJson["data"][0];
  public facebook:any = this.socialJson["data"][1];
  public youtube:any = this.socialJson["data"][2];
  public twitter:any = this.socialJson["data"][3];

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.isRendered = true;
    this.cardsRendered.emit(this.isRendered);
  }

}
