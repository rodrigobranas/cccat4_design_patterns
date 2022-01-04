import PriceCalculator from "./PriceCalculator";

export default class AirportPriceCalculator implements PriceCalculator {

	calculate(hours: number): number {
		let price = 20;
		const minHours = 3;
		const remainingHours = hours - minHours;
		if (remainingHours <= 0) return price;
		price += remainingHours * 10;
		return price;
	}
}