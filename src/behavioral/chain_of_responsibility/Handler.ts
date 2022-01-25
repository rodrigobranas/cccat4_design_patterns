export default interface Handler {
	handle(bills: { type: number, quantity: number }[], amount: number): void;
}
