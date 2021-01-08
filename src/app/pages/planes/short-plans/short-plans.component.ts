import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatalevelsService } from '../../../services/datalevels.service';
import { CategoriasService } from '../../../services/planes/categorias.service';
import { PlanService } from '../../../services/planes/plan.service';
import { Ruta } from '../../../config';

declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'app-short-plans',
	templateUrl: './short-plans.component.html',
	styleUrls: ['./short-plans.component.css']

})

export class ShortPlansComponent implements OnInit {

	@Input() public Categories;
	@Input() public Plans;

	@Output() public sendOption: EventEmitter<boolean> = new EventEmitter();

	public alternate: boolean = true;
	public right: boolean;
	public left: boolean;
	public plansValue: any;
	public nameNivel: any
	public inLvl: boolean = false;
	public defOrMass: boolean = false;
	public defToActive: boolean = true;
	public hypToActive: boolean;
	public planJson:any;
	public backdef: boolean = true;
	public backvol: boolean = true;
	public iniciodef:boolean = false;
	public iniciovol:boolean = false;
	public tempdef:any;
	public tempvol:any;
	public type:any;
	public filteredPlans:any;
	public url = Ruta.url;

	constructor(private level: DatalevelsService,
				private categories : CategoriasService,
				private plans : PlanService) {
	}

	ngOnChanges(){
		if(!this.iniciodef){
			this.iniciodef = true;
			this.tempdef = this.getDefCategories();
		}

		if(!this.iniciovol){
			this.iniciovol = true;
			this.tempvol = this.getVolCategories();
		}

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

	
		if (!this.inLvl) {


			if (!this.defOrMass) {
				
				this.planJson = this.tempdef;
				console.log("this.planJson", this.planJson);

			} else {

				this.planJson = this.tempvol;
				console.log("this.planJson", this.planJson);
			}

		} else {
			this.planJson = this.plansValue;
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
		this.defOrMass = false;
		this.sendOption.emit(this.defOrMass);
		this.type = "def";
		this.inLvl = false;
		this.defToActive = true;
		this.hypToActive = false;
		this.update();
		this.backdef = true
		this.backvol = true


		return this.defToActive;

	}

	public showHyp() {
		this.defOrMass = true;
		this.sendOption.emit(this.defOrMass);
		this.type = "vol;"
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
		if(!this.returnDeforMassValue()){
			this.type = "def";
		}else{
			this.type = "vol";
		}
		this.nameNivel = "basico"
		this.plansValue = this.planFilter(this.type, this.nameNivel);
		this.update();
		this.backto();

	}

	intermediateBool() {
		this.inLvl = true;
		if(!this.returnDeforMassValue()){
			this.type = "def";
		}else{
			this.type = "vol";
		}
		this.nameNivel = "intermedio"
		this.plansValue = this.planFilter(this.type, this.nameNivel);
		this.backto();
		this.update();
	}

	advancedBool() {
		this.inLvl = true;
		if(!this.returnDeforMassValue()){
			this.type = "def";
		}else{
			this.type = "vol";
		}
		this.nameNivel = "avanzado"
		this.plansValue = this.planFilter(this.type, this.nameNivel);
		this.backto();
		this.update();
	}

	
	getVolCategories(){
		let volCategories = this.Categories.filter(res => res.type == "vol")
		this.planJson = volCategories;
		return this.planJson;
	}

	getDefCategories(){
		let defCategories = this.Categories.filter(res => res.type == "def")
		this.planJson = defCategories;
		return this.planJson;
	}

	planFilter(type, nivel){
		let filteredPlans = this.Plans.filter(res => res.type == type && res.nivel == nivel);
		this.plansValue = filteredPlans;
		return this.plansValue;
	}

	returnDeforMassValue(){
		return this.defOrMass;
	}

	update() {
		this.ngOnInit();
	}

	scroll(){
		let el = document.getElementById("topShow");
		$("html, body").animate({
			scrollTop: $(el).offset().top
		}, 500)
	}


}
