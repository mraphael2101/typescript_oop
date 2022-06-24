export default class Animal {
    age;
    name;
    constructor(name) {
        console.log("An instance of an Animal now exists and it was given the name " + name);
        this.name = name;
    }
    // Encapsulation
    get theAge() {
        return this.age;
    }
    // Encapsulation
    set theAge(value) {
        this.age = value;
    }
    generateSecurityCode() {
        return 0;
    }
}
//# sourceMappingURL=Animal.js.map