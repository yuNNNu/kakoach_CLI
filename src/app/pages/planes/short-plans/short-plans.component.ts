import { Component, OnInit } from '@angular/core';
import { ShowdeformassService } from '../../../services/showdeformass.service'; 

@Component({
  selector: 'app-short-plans',
  templateUrl: './short-plans.component.html',
  styleUrls: ['./short-plans.component.css']
})
export class ShortPlansComponent implements OnInit {

  public deformass:boolean;
  constructor(private showdeformassservice:ShowdeformassService) { }

  ngOnInit(): void {

    this.showdeformassservice.cast.subscribe(show => this.deformass = show);
  }
}
