import { Component, OnInit } from '@angular/core';
import { ShowdeformassService } from '../../../services/showdeformass.service';
import { InlvlService } from '../../../services/planes/inlvl.service';

@Component({
  selector: 'app-definitionormass',
  templateUrl: './definitionormass.component.html',
  styleUrls: ['./definitionormass.component.css']
})

export class DefinitionormassComponent implements OnInit {

  public deformass:boolean = true;
  public defToActive:boolean = true;
  public hypToActive:boolean;
  public offInLvl:boolean;
  public temp:boolean;
  constructor(private showdeformassservice:ShowdeformassService,
              private inlvl:InlvlService) { }

  ngOnInit(): void {

    this.showdeformassservice.cast.subscribe(show => this.deformass = show);
    this.inlvl.cast.subscribe(lvl => this.offInLvl = lvl);

  }

  public showDef() {
    this.deformass = false;
    if(this.offInLvl){
      this.offInLvl = false;
      this.inlvl.seeLvl(this.offInLvl);
    }
    this.showdeformassservice.seeView(this.deformass);
  }

  public showHyp() {
    this.deformass = true;
    if(this.offInLvl){
      this.offInLvl = false;
      this.inlvl.seeLvl(this.offInLvl);
    }
    this.showdeformassservice.seeView(this.deformass);
  }

  public onDef() {
    this.defToActive = true;
    this.hypToActive = false;
    return this.defToActive;
  }

  public onHyp() {
    this.defToActive = false;
    this.hypToActive = true;
    return this.hypToActive;
  }

}
