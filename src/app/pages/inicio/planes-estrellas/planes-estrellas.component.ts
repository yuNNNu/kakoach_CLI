import { Component, OnInit } from '@angular/core';
import { PersnalPlanService } from '../../../services/inicio/persnal-plan.service'

@Component({
  selector: 'app-planes-estrellas',
  templateUrl: './planes-estrellas.component.html',
  styleUrls: ['./planes-estrellas.component.css']
})
export class PlanesEstrellasComponent implements OnInit {
  // variable de obj
  public personalPlan: any;
  constructor(private personal: PersnalPlanService) {
    /*=============================================
   RECIBIENDO DATOS DINAMICOS
   ============================================== */
    this.personal.getPersonalPlan()
      .subscribe(respuesta => {
        // pasamos la informacion recibida a la variable
        this.personalPlan = respuesta
        // console.log(this.personalPlan)

      })
  }

  ngOnInit(): void {
  }

}
