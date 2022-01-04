import DarkWidgetFactory from "../../../src/creational/abstract_factory/DarkWidgetFactory";
import LightWidgetFactory from "../../../src/creational/abstract_factory/LightWidgetFactory";
import View from "../../../src/creational/abstract_factory/View";

test("Deve criar uma interface gráfica com tema claro", function () {
	const view = new View("light");
	expect(view.label.color).toBe("black");
	expect(view.button.color).toBe("white");
	expect(view.button.backgroundColor).toBe("blue");
});

test("Deve criar uma interface gráfica com tema escuro", function () {
	const view = new View("dark");
	expect(view.label.color).toBe("white");
	expect(view.button.color).toBe("white");
	expect(view.button.backgroundColor).toBe("black");
});
