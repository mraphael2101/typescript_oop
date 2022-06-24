import Animal from "./Animal.js";
import CanFly from "./CanFly.js";
import Hop from "./Hop.js";

// An example of how we can implement Multi-Level inheritance with interfaces

export default class Bird extends Animal implements CanFly, Hop {

    constructor(public name: string) {
        super(name);
    }

    public fly(altitude: number, speed: number): void {
    }

    public getAvgHopHeight(): number {
        return 0;
    }

    public getMaxHopHeight(): number {
        return 0;
    }

    // Overridden
    public calculateRandomAge(): number {
        return 0;
    }

    // Overloading
    assignColour(a: string, b: string, c: string): void;
    assignColour(a: string, b: string): void;
    assignColour(a: string, b: string, c?: string): void {
        if (c) {
            console.log("Overloaded method called");
        }
        else if(!c) {
            console.log("Overloaded method called");
        }
    }
}



