<<<<<<< HEAD
prompt = require('prompt-sync')();
const gear = prompt("Enter the gear you want to check (1-5): ");

if (gear < 1 || gear > 5) {
    console.log("Invalid gear selection. Please choose a gear between 1 and 5.");
}else if (gear == 1) {
    console.log("You are in first gear. Good for starting and low speeds. 10km/h max.");
}else if (gear == 2) {
    console.log("You are in second gear. Good for moderate speeds. 20km/h max.");
}else if (gear == 3) {
    console.log("You are in third gear. Good for higher speeds. 30km/h max.");
}else if (gear == 4) {
    console.log("You are in fourth gear. Good for cruising. 40km/h max.");
}else if (gear == 5) {
    console.log("You are in fifth gear. Good for high speeds. 50km/h max.");
}   
=======
prompt = require('prompt-sync')();
const gear = prompt("Enter the gear you want to check (1-5): ");

if (gear < 1 || gear > 5) {
    console.log("Invalid gear selection. Please choose a gear between 1 and 5.");
}else if (gear == 1) {
    console.log("You are in first gear. Good for starting and low speeds. 10km/h max.");
}else if (gear == 2) {
    console.log("You are in second gear. Good for moderate speeds. 20km/h max.");
}else if (gear == 3) {
    console.log("You are in third gear. Good for higher speeds. 30km/h max.");
}else if (gear == 4) {
    console.log("You are in fourth gear. Good for cruising. 40km/h max.");
}else if (gear == 5) {
    console.log("You are in fifth gear. Good for high speeds. 50km/h max.");
}   
>>>>>>> 5bfcf05 (Initial Commit)
