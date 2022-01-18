import Observer from "./Observer";

export default class Observable {
	observers: Observer[];

	constructor () {
		this.observers = [];
	}

	register (observer: Observer) {
		this.observers.push(observer);
	}

	notify (name: string, value: string) {
		for (const observer of this.observers) {
			observer.update(name, value);
		}
	}
}
