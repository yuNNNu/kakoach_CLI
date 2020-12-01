import { Component, OnInit } from '@angular/core';
import { ShowdeformassService } from '../../../services/showdeformass.service';
import { DatalevelsService } from '../../../services/datalevels.service';
import { InlvlService } from '../../../services/planes/inlvl.service';

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

	// 

	public inLvl:boolean;

	constructor(private showdeformassservice: ShowdeformassService,
		        private level: DatalevelsService,
		        private inlevel: InlvlService) {
	}

	ngOnInit(): void {

		this.inlevel.cast.subscribe(lvl => this.inLvl = lvl);

		/* SE RECIBEN DATOS DE NIVELES */

		this.showdeformassservice.cast.subscribe(res => {
			this.inlevel.cast.subscribe(resp => {
				this.inLvl = resp;
				// alterno entre botones volumen o definicion, boolean
				this.defOrMass = res;
	     		this.level.getData().subscribe(result => {
	  			// Filtrado
	  				if(!this.inLvl){

	  					if (!this.defOrMass) {
						// GET DATA DE DEFINICION
						
							this.planJson = result[0].nivel;
			      			console.log("plan definicion", this.planJson);

							// recepcion de planes 
							this.array = result[0].planes;
			      			console.log("array filtrado def", this.array);

		  				} else {

							this.planJson = result[1].nivel;
			    			console.log("plan volumen", this.planJson);

							// recepcion de planes 
							this.array = result[1].planes;
			   				console.log("array filtrado vol", this.array);
		  				}
	  				}else{

	  					this.planJson = this.test;
	  					console.log("this.planJson", this.planJson);
	  					console.log("holo");

		  			}	
	     		})	
		}) })
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
		this.getInLvl();
		console.log("this.inLvl", this.inLvl);
		this.basic = true;
		this.intermediate = false;
		this.advanced = false;
		this.nameNivel = "basico"
		console.log("boton basico");
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
	}

	intermediateBool() {
		this.getInLvl();
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
		this.getInLvl();
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

	/////////////////

	getInLvl(){
		this.inLvl = true;
		this.inlevel.seeLvl(this.inLvl)
	}

}
