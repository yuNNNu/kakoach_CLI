import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})


export class PlanesComponent implements OnInit {

  constructor(private _ac : ActivatedRoute) { }

  public categories = this._ac.snapshot.data.categories.data;
  public plans = this._ac.snapshot.data.plans.data;
  
  
  ngOnInit(): void {

  }

}
