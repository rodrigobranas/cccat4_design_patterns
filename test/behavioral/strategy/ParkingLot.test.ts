import AirportPriceCalculator from "../../../src/behavioral/strategy/AirportPriceCalculator";
import BeachPriceCalculator from "../../../src/behavioral/strategy/BeachPriceCalculator";
import ParkingLot from "../../../src/behavioral/strategy/ParkingLot";
import ShoppingPriceCalculator from "../../../src/behavioral/strategy/ShoppingPriceCalculator";

test("Deve criar um estacionamento vazio", function () {
	const parkingLot = new ParkingLot("beach", 500, new BeachPriceCalculator());
	expect(parkingLot.getEmptySpaces()).toBe(500);
});

test("Deve entrar um carro", function () {
	const parkingLot = new ParkingLot("beach", 500, new BeachPriceCalculator());
	parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
	expect(parkingLot.getEmptySpaces()).toBe(499);
});

test("Deve sair um carro", function () {
	const parkingLot = new ParkingLot("beach", 500, new BeachPriceCalculator());
	parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
	const price = parkingLot.checkout("AAA-9999", new Date("2022-01-01T15:00:00"));
	expect(parkingLot.getEmptySpaces()).toBe(500);
});

test("Deve calcular o valor que deve ser pago na praia, 20 reais por tempo ilimitado", function () {
	const parkingLot = new ParkingLot("beach", 500, new BeachPriceCalculator());
	parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
	const price = parkingLot.checkout("AAA-9999", new Date("2022-01-01T20:00:00"));
	expect(price).toBe(20);
});

test("Deve calcular o valor que deve ser pago no shopping, 10 reais por hora, o carro permaneceu 5 horas", function () {
	const parkingLot = new ParkingLot("shopping", 500, new ShoppingPriceCalculator());
	parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
	const price = parkingLot.checkout("AAA-9999", new Date("2022-01-01T15:00:00"));
	expect(price).toBe(50);
});

test("Deve calcular o valor que deve ser pago no aeroporto, 3 horas por 20 reais e depois 10 reais por hora, o carro permaneceu 5 horas", function () {
	const parkingLot = new ParkingLot("airport", 500, new AirportPriceCalculator());
	parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"));
	const price = parkingLot.checkout("AAA-9999", new Date("2022-01-01T15:00:00"));
	expect(price).toBe(40);
});
