import Handler from "./Handler";

export default class Atm {

	constructor (readonly handler: Handler) {
	}

	withdraw (amount: number) {
		const bills: { type: number, quantity: number}[] = [];
		this.handler.handle(bills, amount);
		return bills;
	}
}
