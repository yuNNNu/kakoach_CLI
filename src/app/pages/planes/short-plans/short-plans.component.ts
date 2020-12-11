import { Component, OnInit } from '@angular/core';
import { DatalevelsService } from '../../../services/datalevels.service';
import { CategoriasService } from '../../../services/planes/categorias.service';


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
	public inLvl: boolean = false;
	public defOrMass: boolean = false;
	///////////////////////////////////
	public defToActive: boolean = true;
	public hypToActive: boolean;
	///////////////////////////////////
	public planJsondef: any;
	public planJsonvol: any;
	public planJson:any;
	// 
	public backdef: boolean = true;
	public backvol: boolean = true;
	////////////
	public inicio:boolean = true;

	constructor(private level: DatalevelsService,
				private categories : CategoriasService) {

	}



	ngOnInit(): void {
		

		// navegacion scroll
		$(".botons").click(function (e) {
			e.preventDefault();
			var target = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(target).offset().top
			}, 9000, "easeOutBack")

		})
		
		this.getDef(); 
		this.getVol();

	
		if (!this.inLvl) {


			if (!this.defOrMass) {


				this.planJson = this.planJsondef;

			} else {


				this.planJson = this.planJsonvol;
			}

		} else {
			this.planJson = this.test;

			return;
		}

		
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
		this.inicio = false;
		this.defOrMass = false;
		this.inLvl = false;
		this.defToActive = true;
		this.hypToActive = false;
		this.update();
		this.backdef = true
		this.backvol = true



		return this.defToActive;

	}

	public showHyp() {
		this.inicio = false;
		this.defOrMass = true;
		this.inLvl = false;
		this.defToActive = false;
		this.hypToActive = true;
		this.update();
		this.backdef = true
		this.backvol = true

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

	backto() {
		if (!this.defOrMass) {
			this.backdef = false
			this.backvol = true
		} else {
			this.backdef = true
			this.backvol = false
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
		this.backto();

	}

	intermediateBool() {
		this.inLvl = true;
		this.nameNivel = "intermedio"
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
		this.backto();
		this.update();
	}

	advancedBool() {
		this.inLvl = true;
		this.nameNivel = "avanzado"
		// filtro
		this.test = this.array.filter(ar =>
			ar.nivel === this.nameNivel
		);
		this.backto();
		this.update();
	}

	getDef(){
		this.categories.getCategories()
	      .subscribe((respuesta:any) => {
	        let filterdef = respuesta["data"].filter(res => res.type == "def")
	        this.planJsondef = filterdef;
	      	return this.planJsondef;  
	    })

	}
	
	getVol(){
		this.categories.getCategories()
	      .subscribe((respuesta:any) => {
	        let filtervol = respuesta["data"].filter(res => res.type == "vol")
	        this.planJsonvol = filtervol;
	        return this.planJsonvol;
	    })
	}

	doClick(){
		document.getElementById("deformass1").click();
	}

	update() {
		this.ngOnInit();
	}


}
