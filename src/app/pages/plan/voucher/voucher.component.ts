import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from './../../../services/email/email.service'
@Component({
	selector: 'app-voucher',
	templateUrl: './voucher.component.html',
	styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {

	@Input() public Transaction;
	@Input() public Precio;
	@Input() public Pdf;
	public transaction: any;
	public precio: any; ''
	constructor(private _email: EmailService) { }

	ngOnInit(): void {
		console.log("En el pdf", this.Pdf)
		this.transaction = this.Transaction;
		this.precio = this.Precio;
		console.log("this.precio", this.precio);
		switch (this.transaction.payment_type_code) {
			case 'VD': this.transaction.payment_type_code = "Venta Débito";
				break;
			case 'VN': this.transaction.payment_type_code = "Venta Normal";
				break;
			case 'VC': this.transaction.payment_type_code = "Venta en cuotas.";
				break;
			case 'SI': this.transaction.payment_type_code = "3 cuotas sin interés";
				break;
			case 'S2': this.transaction.payment_type_code = "2 cuotas sin interés";
				break;
			case 'NC': this.transaction.payment_type_code = `${this.transaction.installments_number} Cuotas sin interés`;
				break;
			case 'VP': this.transaction.payment_type_code = "Venta Prepago";

				break;
		}
		this._email.sendPdf(this.Pdf).subscribe(res => {
			console.log("res mail", res)
		})





	}
}
