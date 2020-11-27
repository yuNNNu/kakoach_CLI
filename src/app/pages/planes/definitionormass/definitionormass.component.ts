import { Component, OnInit } from '@angular/core';
import { ShowdeformassService } from '../../../services/showdeformass.service';

@Component({
  selector: 'app-definitionormass',
  templateUrl: './definitionormass.component.html',
  styleUrls: ['./definitionormass.component.css']
})

export class DefinitionormassComponent implements OnInit {	

  public deformass:boolean = true;
  constructor(private showdeformassservice:ShowdeformassService) { }

  ngOnInit(): void {

    this.showdeformassservice.cast.subscribe(show => this.deformass = show);
  }

  public showDef(){
    this.deformass = false;
    this.showdeformassservice.seeView(this.deformass);
  }

  public showHyp(){
    this.deformass = true;
    this.showdeformassservice.seeView(this.deformass);
  }

}
