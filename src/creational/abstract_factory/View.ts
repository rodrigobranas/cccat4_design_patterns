import Button from "./Button";
import FactoryBuilder from "./FactoryBuilder";
import Label from "./Label";

export default class View {
	label: Label;
	button: Button;

	constructor (theme: string) {
		const widgetFactory = FactoryBuilder.create(theme);
		this.label = widgetFactory.createLabel();
		this.button = widgetFactory.createButton();
	}
}
