<<<<<<< HEAD
let balance = 1000;
let pin = "0124";
let accountNumber = "1234567890";
let count = 0;
// switch - withdrawl, balance inquiry, change pin
prompt = require('prompt-sync')();


function checkBalance() {
    return `Your current balance is $${balance}`;
}

function changePin(newPin) {
    if (newPin.length !== 4 || isNaN(newPin)) { 
        return "Invalid PIN. It must be a 4-digit number.";
    }
    pin = newPin;
    return "PIN changed successfully.";
}

function welcomeMessage() {
    console.log("Welcome to the ATM!\n");
    let choice = 0;
    
    while (choice !==4){
        console.log("Please select an option:\n1. Check Balance\n2. Change PIN\n3. Withdraw Funds\n4. Exit");
        choice = prompt("Enter your choice : ");
        switch (choice) {
            case '1':
                console.log(checkBalance());
                break;
            case '2':
                let newPin = prompt("Enter your new 4-digit PIN: ");
                console.log(changePin(newPin));
                break;
            case '3':
                let amount = parseFloat(prompt("Enter the amount to withdraw: "));
                let enteredPin = prompt("Enter your PIN: ");
                if(count >= 3) {
                    console.log("Your account is locked due to too many incorrect PIN attempts.");
                    return;
                }
                if (enteredPin !== pin) {
                    console.log("Incorrect PIN");
                    count++;
                } else if (amount > balance) {
                    console.log("Insufficient funds");
                } else {
                    balance -= amount;
                    console.log(`Withdrawal successful. New balance: $${balance}`);
                }
                break;
            case '4':
                console.log("Thank you for using the ATM. Goodbye!");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
    

}

welcomeMessage();

=======
let balance = 1000;
let pin = "0124";
let accountNumber = "1234567890";
let count = 0;
// switch - withdrawl, balance inquiry, change pin
prompt = require('prompt-sync')();


function checkBalance() {
    return `Your current balance is $${balance}`;
}

function changePin(newPin) {
    if (newPin.length !== 4 || isNaN(newPin)) { 
        return "Invalid PIN. It must be a 4-digit number.";
    }
    pin = newPin;
    return "PIN changed successfully.";
}

function welcomeMessage() {
    console.log("Welcome to the ATM!\n");
    let choice = 0;
    
    while (choice !==4){
        console.log("Please select an option:\n1. Check Balance\n2. Change PIN\n3. Withdraw Funds\n4. Exit");
        choice = prompt("Enter your choice : ");
        switch (choice) {
            case '1':
                console.log(checkBalance());
                break;
            case '2':
                let newPin = prompt("Enter your new 4-digit PIN: ");
                console.log(changePin(newPin));
                break;
            case '3':
                let amount = parseFloat(prompt("Enter the amount to withdraw: "));
                let enteredPin = prompt("Enter your PIN: ");
                if(count >= 3) {
                    console.log("Your account is locked due to too many incorrect PIN attempts.");
                    return;
                }
                if (enteredPin !== pin) {
                    console.log("Incorrect PIN");
                    count++;
                } else if (amount > balance) {
                    console.log("Insufficient funds");
                } else {
                    balance -= amount;
                    console.log(`Withdrawal successful. New balance: $${balance}`);
                }
                break;
            case '4':
                console.log("Thank you for using the ATM. Goodbye!");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
    

}

welcomeMessage();

>>>>>>> 5bfcf05 (Initial Commit)
// console.log(withdraw(amtWithdraw, pin));