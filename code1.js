<<<<<<< HEAD
// function delayedLog(messageToDisplay, delayTime, callbackMethod) {
//     setTimeout(() => {
//         console.log(messageToDisplay);
//         callbackMethod();
//     }, delayTime);
// }

// delayedLog("This is a delayed message", 2000, () => {
//     delayedLog("This is another delayed message", 3000, () => {
//         delayedLog("This is the final delayed message", 4000, () => {
//             console.log("All messages have been displayed.");
//         });
//     });     
// });


//Writing same using promise

function wait(ms){
    return new Promise((resolve,reject) => setTimeout(resolve, resolve, ms));
}

wait(1000)
.then(() => console.log("This is a delayed message"))
.then(() => wait(2000))
.then(() => console.log("This is another delayed message"))
.then(() => wait(3000))
.then(() => console.log("This is the final delayed message"))
.catch(() => console.error("An error occurred"))
.then(() => console.log("All messages have been displayed."));

//In promise we have to write compulsory resolve, the reject is optional
=======
// function delayedLog(messageToDisplay, delayTime, callbackMethod) {
//     setTimeout(() => {
//         console.log(messageToDisplay);
//         callbackMethod();
//     }, delayTime);
// }

// delayedLog("This is a delayed message", 2000, () => {
//     delayedLog("This is another delayed message", 3000, () => {
//         delayedLog("This is the final delayed message", 4000, () => {
//             console.log("All messages have been displayed.");
//         });
//     });     
// });


//Writing same using promise

function wait(ms){
    return new Promise((resolve,reject) => setTimeout(resolve, resolve, ms));
}

wait(1000)
.then(() => console.log("This is a delayed message"))
.then(() => wait(2000))
.then(() => console.log("This is another delayed message"))
.then(() => wait(3000))
.then(() => console.log("This is the final delayed message"))
.catch(() => console.error("An error occurred"))
.then(() => console.log("All messages have been displayed."));

//In promise we have to write compulsory resolve, the reject is optional
>>>>>>> 5bfcf05 (Initial Commit)
