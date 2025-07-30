<<<<<<< HEAD


prompt = require('prompt-sync')();
const gear = prompt("Enter the gear you want to check (1-5): ");

switch (gear) {
    case '1':
        console.log("You are in first gear. Good for starting and low speeds. 10km/h max.");
        break;
    case '2':
        console.log("You are in second gear. Good for moderate speeds. 20km/h max.");
        break;
    case '3':
        console.log("You are in third gear. Good for higher speeds. 30km/h max.");
        break;  
    case '4':
        console.log("You are in fourth gear. Good for cruising. 40km/h max.");
        break;      
    case '5':
        console.log("You are in fifth gear. Good for high speeds. 50km/h max.");
        break;  
    default:
        console.log("Invalid gear selection. Please choose a gear between 1 and 5.");
        break;  
=======


prompt = require('prompt-sync')();
const gear = prompt("Enter the gear you want to check (1-5): ");

switch (gear) {
    case '1':
        console.log("You are in first gear. Good for starting and low speeds. 10km/h max.");
        break;
    case '2':
        console.log("You are in second gear. Good for moderate speeds. 20km/h max.");
        break;
    case '3':
        console.log("You are in third gear. Good for higher speeds. 30km/h max.");
        break;  
    case '4':
        console.log("You are in fourth gear. Good for cruising. 40km/h max.");
        break;      
    case '5':
        console.log("You are in fifth gear. Good for high speeds. 50km/h max.");
        break;  
    default:
        console.log("Invalid gear selection. Please choose a gear between 1 and 5.");
        break;  
>>>>>>> 5bfcf05 (Initial Commit)
}