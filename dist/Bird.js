import Animal from "./Animal.js";
// An example of how we can implement Multi-Level inheritance with interfaces
export default class Bird extends Animal {
    name;
    constructor(name) {
        super(name);
        this.name = name;
    }
    fly(altitude, speed) {
    }
    getAvgHopHeight() {
        return 0;
    }
    getMaxHopHeight() {
        return 0;
    }
    // Overridden
    calculateRandomAge() {
        return 0;
    }
    assignColour(a, b, c) {
        if (c) {
            console.log("Overloaded method called");
        }
        else if (!c) {
            console.log("Overloaded method called");
        }
    }
}
//# sourceMappingURL=Bird.js.map