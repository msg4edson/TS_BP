import { Customer } from "./customer";

// now, use the Customer class
// create a new instance
let myCustomer = new Customer("Edson");
console.log(myCustomer.announce());
let newMassage: string = myCustomer.announce();

// change the text on the page
let webHeading = document.querySelector('h1');
webHeading!.textContent = newMassage;
