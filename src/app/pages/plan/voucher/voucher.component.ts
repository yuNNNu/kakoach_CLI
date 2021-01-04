import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from './../../../services/email/email.service'
import { VentaExitosaService } from './../../../services/webpay/compras/venta-exitosa.service'
@Component({
	selector: 'app-voucher',
	templateUrl: './voucher.component.html',
	styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {

	@Input() public Transaction;
	@Input() public Precio;
	@Input() public Pdf;
	@Input() public Plan;
	public transaction: any;
	public precio: any; ''
	constructor(private _email: EmailService, private _venta: VentaExitosaService) { }

	ngOnInit(): void {

		this.transaction = this.Transaction;

		this.precio = this.Precio;
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
		}).closed

		let datosVenta = ({
			mail: localStorage.getItem("email"),
			id: this.Plan[0]._id,
			nro_venta: this.transaction.buy_order,
			fecha_venta: this.transaction.transaction_date,
			session_id: this.transaction.session_id,
			token: localStorage.getItem("token"),
			nombre_plan: this.Plan[0].descripcion,
			precio: this.transaction.amount
		})
		console.log("datosVenta", datosVenta)
		this._venta.registrarVenta(datosVenta)
			.subscribe(res => {

			}).closed
		localStorage.removeItem("token");







	}
}
