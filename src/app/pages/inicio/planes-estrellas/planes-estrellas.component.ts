import { Component, OnInit, Input } from '@angular/core';
import { PersnalPlanService } from '../../../services/inicio/persnal-plan.service'
import { DescripcionService } from '../../../services/inicio/descripcion.service'
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


  public url = Ruta.url;
  public secondaryPlansJson1: any;
  public secondaryPlansJson2: any;
  public tituloDesc: any;
  public descripcionDesc: any;
  public principal: any;

  constructor(private personal: PersnalPlanService, private descripcion: DescripcionService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    ============================================== */
    this.descripcion.getDescripcion()
      .subscribe(respuesta => {
        this.tituloDesc = respuesta["data"][0].titulo;
        this.descripcionDesc = respuesta["data"][0].descripcion;
      })

    this.personal.getPersonalPlan().subscribe(respuesta => {
      this.principal = respuesta["data"][0]
    })

  }

  ngOnInit(): void {
    this.secondaryPlansJson1 = this.Plans.find(res => res._id == this.Secondary[0].id);
    this.secondaryPlansJson2 = this.Plans.find(res => res._id == this.Secondary[1].id);


  }

}
