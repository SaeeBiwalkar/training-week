<<<<<<< HEAD

const start = 1900;
const end = 2000;
let count = 0;
const leapYears = [];


for (let year = start; year <= end; year++) {
    if((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) && count < 10) {
        //console.log(`${year} is a leap year.`);
        leapYears[count] = year;
        count++;
    }
}

console.log(`Total leap years between ${start} and ${end}: ${count}`);

for (let i=0; i<leapYears.length; i++){
    console.log(`Leap Year ${i+1}: ${leapYears[i]}`);
=======

const start = 1900;
const end = 2000;
let count = 0;
const leapYears = [];


for (let year = start; year <= end; year++) {
    if((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) && count < 10) {
        //console.log(`${year} is a leap year.`);
        leapYears[count] = year;
        count++;
    }
}

console.log(`Total leap years between ${start} and ${end}: ${count}`);

for (let i=0; i<leapYears.length; i++){
    console.log(`Leap Year ${i+1}: ${leapYears[i]}`);
>>>>>>> 5bfcf05 (Initial Commit)
}