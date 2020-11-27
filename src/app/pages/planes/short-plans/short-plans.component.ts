import { Component, OnInit } from '@angular/core';
import { ShowdeformassService } from '../../../services/showdeformass.service';
import { DatalevelsService } from '../../../services/datalevels.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-short-plans',
  templateUrl: './short-plans.component.html',
  styleUrls: ['./short-plans.component.css']
})
export class ShortPlansComponent implements OnInit {

  public defOrMass:boolean;
  public rlBool:boolean = true;
  public rightLeftAos:string = "right";
  //////////////////////////////
  public planJson:any;

  public changingSide(){

  }

  public changeSide
  constructor(private showdeformassservice:ShowdeformassService, 
  			  private level: DatalevelsService) { 
    }

  ngOnInit(): void {

  	/* SE RECIBEN DATOS DE NIVELES */

    this.showdeformassservice.cast.subscribe(show => {

    	this.defOrMass = show;

    	if(!this.defOrMass){
    		this.level.getDefinitionData().subscribe(result => {
  		    this.planJson = result
  	    	})
    	}else{
    		this.level.getHypertrophyData().subscribe(result => {
  		    this.planJson = result
    		})
	    }
    })
  }

  callback(){

  	if(!this.rlBool){
  		this.rightLeftAos = "right";
  		return this.rightLeftAos;
  	}else{
  		this.rightLeftAos = "left";
  		return this.rightLeftAos;
  	}

  }
}
