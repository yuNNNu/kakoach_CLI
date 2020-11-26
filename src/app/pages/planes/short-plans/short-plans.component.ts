import { Component, OnInit } from '@angular/core';
import { DefinitionormassComponent } from '../definitionormass/definitionormass.component';

@Component({
  selector: 'app-short-plans',
  templateUrl: './short-plans.component.html',
  styleUrls: ['./short-plans.component.css']
})
export class ShortPlansComponent implements OnInit {

  constructor(private dom: DefinitionormassComponent) { }

  public show:any = this.dom.defOrMass;

  ngOnInit(): void {
  }

}
