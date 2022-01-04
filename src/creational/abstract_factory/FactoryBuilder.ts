import DarkWidgetFactory from "./DarkWidgetFactory";
import LightWidgetFactory from "./LightWidgetFactory";
import WidgetFactory from "./WidgetFactory";

export default class FactoryBuilder {

	static create (type: string) : WidgetFactory {
		if (type === "light") return new LightWidgetFactory();
		if (type === "dark") return new DarkWidgetFactory();
		throw new Error("Factory not found");
	}
}