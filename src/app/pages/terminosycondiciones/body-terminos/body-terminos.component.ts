import { Component, OnInit, Input } from '@angular/core';
import { terminosyCondicionesService } from '../../../services/terminos/terminosycondiciones.service'

@Component({
  selector: 'app-body-terminos',
  templateUrl: './body-terminos.component.html',
  styleUrls: ['./body-terminos.component.css']
})
export class BodyTerminosComponent implements OnInit {

  @Input() public Terms;
  public termss:any;
  constructor(private terms : terminosyCondicionesService) { }

  ngOnInit(): void {
  	this.termss = this.Terms[0].contenido;
  }



}
