import PayPalTransaction from "../../../src/structural/adapter/PayPalTransaction";
import PayPalTransactionAdapter from "../../../src/structural/adapter/PayPalTransactionAdapter";
import StripeTransaction from "../../../src/structural/adapter/StripeTransaction";
import StripeTransactionAdapter from "../../../src/structural/adapter/StripeTransactionAdapter";

test("Deve criar uma transação do Stripe", function () {
	const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2);
	expect(stripeTransaction.code).toBe("AHN786AB8");
});

test("Deve criar uma transação do PayPal", function () {
	const stripeTransaction = new PayPalTransaction(78978978, 1000, "S");
	expect(stripeTransaction.id).toBe(78978978);
});

test("Deve criar uma transação a partir do Stripe", function () {
	const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2);
	const transaction = new StripeTransactionAdapter(stripeTransaction);
	expect(transaction.trackNumber).toBe("AHN786AB8");
	expect(transaction.amount).toBe(1000);
	expect(transaction.status).toBe("paid");
});

test("Deve criar uma transação a partir do PayPal", function () {
	const paypalTransaction = new PayPalTransaction(78978978, 1000, "S");
	const transaction = new PayPalTransactionAdapter(paypalTransaction);
	expect(transaction.trackNumber).toBe("78978978");
	expect(transaction.amount).toBe(1000);
	expect(transaction.status).toBe("paid");
});
