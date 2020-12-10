import { Component, OnInit } from '@angular/core';
import { BenefitsService } from '../../../services/planes/benefits.service';
@Component({
  selector: 'app-comenzamos',
  templateUrl: './comenzamos.component.html',
  styleUrls: ['./comenzamos.component.css']
})
export class ComenzamosComponent implements OnInit {

  public benefitsJson: any;
  constructor(private benef: BenefitsService) { }

  ngOnInit(): void {
  	this.benef.getBenefits()
      .subscribe(respuesta => {
        // console.log(respuesta)
        this.benefitsJson = respuesta["data"][0];
        // console.log(this.firstImageJson.imagen)
      })
  }

}
