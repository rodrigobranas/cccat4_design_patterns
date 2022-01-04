import StripeTransaction from "./StripeTransaction";
import Transaction from "./Transaction";

export default class StripeTransactionAdapter implements Transaction {
	trackNumber: string;
	amount: number;
	status: string;

	constructor (stripeTransaction: StripeTransaction) {
		this.trackNumber = stripeTransaction.code;
		this.amount = stripeTransaction.grossAmount;
		this.status = this.convertStatus(stripeTransaction.situation);
	}

	convertStatus (situation: number) {
		const map: any = {
			1: "waiting_payment",
			2: "paid",
			3: "cancelled"
		}
		return map[situation];
	}
}
