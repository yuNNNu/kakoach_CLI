import { Component, OnInit } from '@angular/core';
import { FirstImageAboutMeService } from '../../../services/sobre-mi/first-image-about-me.service'
import { Ruta } from '../../../config';
@Component({
  selector: 'app-imagen-coleccion',
  templateUrl: './imagen-coleccion.component.html',
  styleUrls: ['./imagen-coleccion.component.css']
})
export class ImagenColeccionComponent implements OnInit {
  public imgDate: any;
  public url = Ruta.url;
  constructor(private imag: FirstImageAboutMeService) {
    this.imag.getPrincipalImage()
      .subscribe(res => {
        this.imgDate = res["data"][0];
      })
  }

  ngOnInit(): void {
  }

}
