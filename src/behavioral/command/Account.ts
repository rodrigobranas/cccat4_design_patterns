export default class Account {
	balance: number;

	constructor () {
		this.balance = 0;
	}

	credit (amount: number) {
		this.balance += amount;
	}

	debit (amount: number) {
		this.balance -= amount;
	}

	getBalance () {
		return this.balance;
	}
}
