"use strict";

var user = {
  firstname: 'Jonathan',
  lastname: 'Williams',
  balance: 4432.54,
  subtractFromBalance: function subtractFromBalance(toSub) {
    if (toSub === void 0) {
      toSub = 0.0;
    }

    if (toSub === 0) return false;
    user.balance -= toSub;
    return true;
  }
}; // Successful

console.log("The user " + user.firstname + " " + user.lastname + " has balance " + user.balance + "\u20AC");
console.log('Removing 20€', user.subtractFromBalance(20));
console.log("Current balance is: " + user.balance + "\u20AC");