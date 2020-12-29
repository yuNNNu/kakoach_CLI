import { Component, OnInit, Input } from '@angular/core';
import { PersnalPlanService } from '../../../services/inicio/persnal-plan.service'
import { Ruta } from '../../../config';


@Component({
  selector: 'app-planes-estrellas',
  templateUrl: './planes-estrellas.component.html',
  styleUrls: ['./planes-estrellas.component.css']
})
export class PlanesEstrellasComponent implements OnInit {
  // variable de obj
  @Input() public Plans;
  @Input() public Secondary;
  public personalPlan: any;
  public url = Ruta.url;
  public secondaryPlansJson1:any;
  public secondaryPlansJson2:any;
  constructor(private personal: PersnalPlanService) {
    /*=============================================
   RECIBIENDO DATOS DINAMICOS
   ============================================== */
    this.personal.getPersonalPlan()
      .subscribe(respuesta => {
        // pasamos la informacion recibida a la variable
        this.personalPlan = respuesta["data"][0]
      })
  }

  ngOnInit(): void {

    this.secondaryPlansJson1 = this.Plans.find(res => res._id == this.Secondary[0].id);
    this.secondaryPlansJson2 = this.Plans.find(res => res._id == this.Secondary[1].id);

  }

}
