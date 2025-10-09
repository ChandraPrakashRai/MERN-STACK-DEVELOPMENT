//  function outerFunction() {
//   let count = 0; // outer variable

//   function innerFunction() {
//     count++; // inner function modifies outer variable
//     console.log("Current count:", count);
//   }

//   return innerFunction; // return the inner function
// }

// // create closure
// const counter = outerFunction();

// counter(); // Current count: 1
// counter(); // Current count: 2
// counter(); // Current count: 3


function createBankAccount(owner, initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`${owner} deposited ₹${amount}.`);
      }
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`${owner} withdrew ₹${amount}.`);
      } else {
        console.log("Insufficient balance!");
      }
    },
    checkBalance() {
      console.log(`${owner}'s current balance: ₹${balance}`);
    }
  };
}

// create a secure account
const myAccount = createBankAccount("Chandra", 1000);

myAccount.deposit(500);      // Chandra deposited ₹500.
myAccount.checkBalance();    // Chandra's current balance: ₹1500
myAccount.withdraw(700);     // Chandra withdrew ₹700.
myAccount.checkBalance();    // Chandra's current balance: ₹800

// ❌ Direct access is not possible
console.log(myAccount.balance); // undefined
