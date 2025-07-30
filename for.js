<<<<<<< HEAD

const start = 1900;
const end = 2000;
let count = 0;

for (let year = start; year <= end; year++) {
    if((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) && count < 5) {
        console.log(`${year} is a leap year.`);
        count++;
    }
}

=======

const start = 1900;
const end = 2000;
let count = 0;

for (let year = start; year <= end; year++) {
    if((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) && count < 5) {
        console.log(`${year} is a leap year.`);
        count++;
    }
}

>>>>>>> 5bfcf05 (Initial Commit)
console.log(`Total leap years between ${start} and ${end}: ${count}`);