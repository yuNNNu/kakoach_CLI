import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definitionormass',
  templateUrl: './definitionormass.component.html',
  styleUrls: ['./definitionormass.component.css']
})

export class DefinitionormassComponent implements OnInit {	

  public defOrMass:boolean = false;

  public probando(){
  	if(!this.defOrMass){
  		this.defOrMass = true;
  		console.log("defOrMass", this.defOrMass);

  	}else{
  		this.defOrMass = false;
  		console.log("defOrMass", this.defOrMass);
  	}		
  }

  constructor() { }

  ngOnInit(): void {


  
  }



}
