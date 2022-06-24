import Bird from "./Bird.js";
import BlackSparrow from "./BlackSparrow.js";
// Calling an Overloaded method
new Bird("Nev").assignColour('purple', 'grey');
// Calling an Overridden method
new Bird("Joost").calculateRandomAge();
// Accessing the internal structure of an object (Encapsulation)
let objInstance = new Bird("Subject 333");
objInstance.theAge = 5;
console.log(objInstance);
// Polymorphism ******************************************************************
// 1) Complete the code to demonstrate polymorphism using the Object class in TypeScript
let blackSparObj = new BlackSparrow("Subject 359261");
// 2) Complete the code to demonstrate upcast:
let upcastedObj = new BlackSparrow("Subject 359262");
// 3) Complete the code to demonstrate downcast:
let upcastedObj2 = new BlackSparrow("Subject 359263");
let downcastedObj = upcastedObj2;
// End ****************************************************************************
//# sourceMappingURL=Main.js.map