import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _ac : ActivatedRoute) { }

  public plans = this._ac.snapshot.data.plans.data;
  public secondary = this._ac.snapshot.data.secondaryplans.data;
  
  ngOnInit(): void {
  }

}
