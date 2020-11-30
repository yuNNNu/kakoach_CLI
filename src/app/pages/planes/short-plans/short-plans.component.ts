import { Component, OnInit } from '@angular/core';
import { ShowdeformassService } from '../../../services/showdeformass.service';
import { DatalevelsService } from '../../../services/datalevels.service';

declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'app-short-plans',
	templateUrl: './short-plans.component.html',
	styleUrls: ['./short-plans.component.css']
})
export class ShortPlansComponent implements OnInit {

	public defOrMass: boolean;
	//////////////////////////////
	public planJson: any;
	//////////////////////////////
	// (alternate = true) = (right = true) + (left = false)
	// (alternate = false) = (right = false) + (left = true)

	public alternate: boolean = false;
	public right: boolean = true;
	public left: boolean = false;
	public data: any;
	public test: any;

	constructor(private showdeformassservice: ShowdeformassService,
		private level: DatalevelsService) {
	}

	ngOnInit(): void {

		/* SE RECIBEN DATOS DE NIVELES */

		this.showdeformassservice.cast.subscribe(res => {
			// alterno entre botones volumen o definicion, boolean
			this.defOrMass = res;

			// Filtrado
			if (!this.defOrMass) {

				this.level.getData().subscribe(result => {

					this.planJson = result[0].nivel;

					let nameNivel = "intermedio"
					let array = result[0].planes;
					this.test = array.filter(ar =>
						ar.nivel === nameNivel
					);

					console.log("array a trabajar: ", array)
					console.log("definicion_idea_a_comparar: ", result[0].planes[0].nivel)

					console.log("resultado: ", this.test)
				})


			} else {

				this.level.getData().subscribe(result => {

					this.planJson = result[1].nivel;
					console.log("volumen: ", this.planJson)

				})


			}
		})
	}

	toRight() {
		this.right = true;
		return this.right;
	}

	cancelRight() {
		this.right = false;
		return this.right;
	}

	toLeft() {
		this.left = true;
		return this.left;
	}

	cancelLeft() {
		this.left = false;
		return this.left;
	}

	changingSide() {

		if (this.alternate) {
			this.alternate = false;
			this.cancelLeft();
			this.toRight();
		} else {
			this.alternate = true;
			this.cancelRight();
			this.toLeft();
		}

	}




}
