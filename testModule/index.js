console.log("This is the test module index file.");

const { start, end, add, multiply, square } = require('C:/Users/Administrator/Desktop/javascript-week2/exportFun.js');

// console.log(`Start year from exportFun: ${start}`);
// console.log(`End year from exportFun: ${end}`);
// console.log(`Addition of 5 and 10: ${add(5, 10)}`);
// console.log(`Multiplication of 5 and 10: ${multiply(5, 10)}`);

function delayedLog(messageToDisplay, delayTime, callback) {
    setTimeout(() => 
        console.log(messageToDisplay),
        callback()
)
}

delayedLog("sq of 4 is : " + square(4), 2000, () => {
    delayedLog("sq of 5 is : " + square(5), 2000, () => {
        delayedLog("sq of 6 is : " + square(6), 2000, () => {
            console.log("All messages have been displayed.");
        });
    });     
});


