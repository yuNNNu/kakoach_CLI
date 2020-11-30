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


	// VARIABLES RELACIONADAS A BOTONES (PLANES DE DEFINICION O VOLUMEN)
	public alternate: boolean = false;
	public right: boolean = true;
	public left: boolean = false;
	public data: any;
	public test: any;

	// VARIABLES RELACIONADAS A BOTONES VER MAS(BASICO/INTERMEDIO/AVANZADO)

	public basic: any;
	public intermediate: any;
	public advanced: any

	// var de filtro
	public nameNivel: any;
	public array: any;

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
				// GET DATA DE DEFINICION
				this.level.getData().subscribe(result => {
					this.planJson = result[0].nivel;

					// recepcion de planes 
					this.array = result[0].planes;

					console.log("definicion", this.array)
					// console.log("this.array a trabajar: ", this.array)
					// console.log("definicion_idea_a_comparar: ", result[0].planes[0].nivel)

					// console.log("resultado: ", this.test)
				})

				if (this.basic) {

				} else if (this.intermediate) {

				} else {

				}


			} else {

				// GET DATA DE VOLUMEN
				this.level.getData().subscribe(result => {

					this.planJson = result[1].nivel;

					// recepcion de planes 
					this.array = result[1].planes;

					console.log("volumen", this.array)
					if (this.basic) {

					} else if (this.intermediate) {

					} else {

					}
				})


			}
		})
	}

	// METODOS DE CAMBIO ENTRE VISTA DE DEFINICION Y VOLUMEN
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
	///////////////////////////////////////////////////////////

	// MÉTODOS PARA LA SELECCION DE BOTONES PLANES(BASIC/INTERMEDIATE/ADVANCED)
	// PARA POSTERIOR FILTRADO 

	handleClick(method: string) {
		switch (method) {
			case 'basicBool':
				this.basicBool();
				break;
			case 'intermediateBool':
				this.intermediateBool();
				break;
			case 'advancedBool':
				this.advancedBool();
				break;

			default:
				break;
		}
	}

	basicBool() {
		this.basic = true;
		this.intermediate = false;
		this.advanced = false;
		this.nameNivel = "basico"
		console.log("boton basico");
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
		console.log(this.test)
	}

	intermediateBool() {
		this.basic = false;
		this.intermediate = true;
		this.advanced = false;
		this.nameNivel = "intermedio"
		console.log("boton intermedio");
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
		console.log(this.test)
	}

	advancedBool() {
		this.basic = false;
		this.intermediate = false;
		this.advanced = true;
		this.nameNivel = "avanzado"
		console.log("boton avanzado");
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
		console.log(this.test)
	}

}
