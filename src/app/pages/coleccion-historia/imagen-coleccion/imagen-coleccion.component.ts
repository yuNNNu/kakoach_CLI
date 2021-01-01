import { Component, OnInit } from '@angular/core';
import { FirstImageAboutMeService } from '../../../services/sobre-mi/first-image-about-me.service'
import { Ruta } from '../../../config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagen-coleccion',
  templateUrl: './imagen-coleccion.component.html',
  styleUrls: ['./imagen-coleccion.component.css']
})
export class ImagenColeccionComponent implements OnInit {
  public url = Ruta.url;
  constructor(private _ac : ActivatedRoute) {
  }

  public imgJson = this._ac.snapshot.data.image.data[0];
  ngOnInit(): void {

  }

}
