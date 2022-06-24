export default abstract class Animal {

    protected age: number;
    protected name: string;

    protected constructor(name: string) {
        console.log("An instance of an Animal now exists and it was given the name " + name);
        this.name = name;
    }

    // Encapsulation
    get theAge() : number {
        return this.age;
    }
    // Encapsulation
    set theAge(value: number) {
        this.age = value;
    }

    public abstract calculateRandomAge() : number;

    protected generateSecurityCode() : number {
        return 0;
    }

}