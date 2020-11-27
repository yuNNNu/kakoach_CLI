import { Component, OnInit } from '@angular/core';
import { FirstImageAboutMeService } from '../../../services/sobre-mi/first-image-about-me.service'
@Component({
  selector: 'app-imagen-coleccion',
  templateUrl: './imagen-coleccion.component.html',
  styleUrls: ['./imagen-coleccion.component.css']
})
export class ImagenColeccionComponent implements OnInit {
  public imgDate: any;
  constructor(private imag: FirstImageAboutMeService) {
    this.imag.getImageAboutMe()
      .subscribe(res => {
        this.imgDate = res;
        // console.log(res)
      })
  }

  ngOnInit(): void {
  }

}
