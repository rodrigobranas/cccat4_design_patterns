import PayPalTransaction from "./PayPalTransaction";
import Transaction from "./Transaction";

export default class StripeTransactionAdapter implements Transaction {
	trackNumber: string;
	amount: number;
	status: string;

	constructor (paypalTransaction: PayPalTransaction) {
		this.trackNumber = `${paypalTransaction.id}`;
		this.amount = paypalTransaction.amount;
		this.status = this.convertStatus(paypalTransaction.status);
	}

	convertStatus (status: string) {
		const map: any = {
			"P": "waiting_payment",
			"S": "paid",
			"F": "refunded"
		}
		return map[status];
	}
}
