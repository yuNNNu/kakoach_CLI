import { Component, OnInit, Input } from '@angular/core';
import { Ruta } from '../../../config';
import { PrincipalImagePlansService } from '../../../services/planes/principal-image-plans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagen-principal',
  templateUrl: './imagen-principal.component.html',
  styleUrls: ['./imagen-principal.component.css']
})
export class ImagenPrincipalComponent implements OnInit {

  @Input() public DOM;
  public url = Ruta.url;
  public firstImageJson: any;
  public number:any;
  constructor(private principal : PrincipalImagePlansService,
              private _ac : ActivatedRoute) {
  }

  ngOnChanges(){
     // number 0 == imagen principal de definicion
     // number 1 == imagen principal de volumen
     if(this.DOM == false){
       this.number = 0;
     }else{
       this.number = 1;
     }

     this.firstImageJson = this._ac.snapshot.data.image.data[this.number];
  }

  ngOnInit(): void {
    this.firstImageJson = this._ac.snapshot.data.image.data[0];
  }


}
