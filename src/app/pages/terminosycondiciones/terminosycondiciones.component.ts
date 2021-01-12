import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terminosycondiciones',
  templateUrl: './terminosycondiciones.component.html',
  styleUrls: ['./terminosycondiciones.component.css']
})
export class TerminosycondicionesComponent implements OnInit {

  constructor(private _ac : ActivatedRoute) { }

  public terms : any = this._ac.snapshot.data.terms.data;

  ngOnInit(): void {
  }

}
