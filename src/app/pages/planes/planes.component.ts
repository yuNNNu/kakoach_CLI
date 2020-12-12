import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})


export class PlanesComponent implements OnInit {

  constructor(private _ac : ActivatedRoute) { }

  public data = this._ac.snapshot.data.data.data;
  
  ngOnInit(): void {
  	// console.log(this._ac.snapshot.data.data.data)
  }

}
