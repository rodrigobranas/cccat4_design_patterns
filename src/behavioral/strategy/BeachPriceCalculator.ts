import PriceCalculator from "./PriceCalculator";

export default class BeachPriceCalculator implements PriceCalculator {

	calculate(hours: number): number {
		return 20;
	}
}
