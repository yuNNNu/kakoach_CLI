import { Component, OnInit } from '@angular/core';
import { BenefitsService } from '../../../services/inicio/benefits.service'
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  public benefitstJson: any;
  constructor(private ben: BenefitsService) { }

  ngOnInit(): void {
    this.ben.getBenefits()
      .subscribe(respuesta => {
        this.benefitstJson = respuesta["data"][0]
                // console.log(this.benefitstJson)
      })
  }

}
