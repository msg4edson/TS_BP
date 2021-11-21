"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
// now, use the Customer class
// create a new instance
var myCustomer = new customer_1.Customer("Edson");
console.log(myCustomer.announce());
var newMassage = myCustomer.announce();
// change the text on the page
var webHeading = document.querySelector('h1');
webHeading.textContent = newMassage;
