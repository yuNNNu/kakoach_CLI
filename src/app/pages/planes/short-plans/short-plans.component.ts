import { Component, OnInit } from '@angular/core';
import { DatalevelsService } from '../../../services/datalevels.service';

declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'app-short-plans',
	templateUrl: './short-plans.component.html',
	styleUrls: ['./short-plans.component.css']
})
export class ShortPlansComponent implements OnInit {


	//////////////////////////////
	//////////////////////////////
	// (alternate = true) = (right = true) + (left = false)
	// (alternate = false) = (right = false) + (left = true)


	// VARIABLES RELACIONADAS A BOTONES (PLANES DE DEFINICION O VOLUMEN)
	public alternate: boolean = false;
	public right: boolean;
	public left: boolean;
	///////////////////////////////////
	public test: any;
	public array: any;
	///////////////////////////////////
	public nameNivel: any
	public inLvl: boolean;
	public defOrMass: boolean;
	///////////////////////////////////
  	public defToActive:boolean = true;
 	public hypToActive:boolean;
 	///////////////////////////////////
 	public planJson: any;

	constructor(private level: DatalevelsService) {
	}

	ngOnInit(): void {

		/* SE RECIBEN DATOS DE NIVELES */
		// alterno entre botones volumen o definicion, boolean
		this.level.getData().subscribe(result => {
			// Filtrado
			if (!this.inLvl) {
				console.log("this.inLvl", this.inLvl);

				if (!this.defOrMass) {
					console.log("this.defOrMass", this.defOrMass);
					// GET DATA DE DEFINICION

					this.planJson = result[0].nivel;
					console.log("plan definicion", this.planJson);

					// recepcion de planes 
					this.array = result[0].planes;
	      			console.log("array filtrado def", this.array);
	      			return;

				} else {

					this.planJson = result[1].nivel;
					console.log("plan volumen", this.planJson);

					// recepcion de planes 
					this.array = result[1].planes;
	   				console.log("array filtrado vol", this.array);
	   				return;
  				}

			}else{

				this.planJson = this.test;

				return;
  			}	
 		})	
	}

	// ALTERNADO ENTRE TARJETAS AL MOMENTO DE CARGAR JSON (IZQUIERDA A DERECHA HACIA ABAJO)
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

	// PRENDIDO O APAGADO DE UN BOTON, SE APAGA EL DE AL LADO

	public showDef() {
		this.defOrMass = false;
	    this.inLvl = false;
	    this.defToActive = true;
	    this.hypToActive = false;
	    this.update();
	    return this.defToActive;
	}

	public showHyp() {
	  this.defOrMass = true;
	  this.inLvl = false;
	  this.defToActive = false;
	  this.hypToActive = true;
	  this.update();
	  return this.hypToActive;
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
		this.inLvl = true;
		this.nameNivel = "basico"
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
		this.update();
	}

	intermediateBool() {
		this.inLvl = true;
		this.nameNivel = "intermedio"
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
		this.update();
	}

	advancedBool() {
		this.inLvl = true;
		this.nameNivel = "avanzado"
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
		this.update();
	}

	update(){
		this.ngOnInit();
	}


}
