<<<<<<< HEAD
// Prints the stars in plain line with a delay
// function printStars(count, delay) {
//   let i = 0;
//   let interval = setInterval(() => {
//       if (i >= count) {
//           clearInterval(interval);
//           process.stdout.write('\n'); // end the line
//           return;
//       }
//       process.stdout.write('L\t');
//       process.stdout.write('O\t');
//       process.stdout.write('L\t');
//       i++;
//   }, delay);
// }

// printStars(100, 50); // Prints 10 stars with 500ms delay


// Prints a pyramid of stars with a delay
// function printPyramid(rows, delay) {
//   for (let i = 1; i <= rows; i++) {
//       setTimeout(() => {
//           let spaces = ' '.repeat(rows - i);
//           let stars = '* '.repeat(i);
//           console.log(spaces + stars);
//       }, i * delay);
//   }
// }

// printPyramid(50, 500); // 5 rows, 500ms delay between each row


const chalk = require('chalk');

function printLineWithDelay(line, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(line);
            resolve();
        }, delay);
    });
}

async function printColorfulTree(height) {
    const colors = [chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan, chalk.white, chalk.gray, chalk.hex('#FFA500')]; // Adding orange color
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '';
        for (let j = 0; j < 2 * i - 1; j++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            stars += color('*');
        }
        await printLineWithDelay(spaces + stars, 300);
    }

    // Tree trunk
    const trunkSpace = ' '.repeat(height - 1);
    const trunk = chalk.hex('#8B4513')('|');
    await printLineWithDelay(trunkSpace + trunk, 300);
    await printLineWithDelay(trunkSpace + trunk, 300);
    await printLineWithDelay(trunkSpace + trunk, 300);
}

printColorfulTree(10);

=======
// Prints the stars in plain line with a delay
// function printStars(count, delay) {
//   let i = 0;
//   let interval = setInterval(() => {
//       if (i >= count) {
//           clearInterval(interval);
//           process.stdout.write('\n'); // end the line
//           return;
//       }
//       process.stdout.write('L\t');
//       process.stdout.write('O\t');
//       process.stdout.write('L\t');
//       i++;
//   }, delay);
// }

// printStars(100, 50); // Prints 10 stars with 500ms delay


// Prints a pyramid of stars with a delay
// function printPyramid(rows, delay) {
//   for (let i = 1; i <= rows; i++) {
//       setTimeout(() => {
//           let spaces = ' '.repeat(rows - i);
//           let stars = '* '.repeat(i);
//           console.log(spaces + stars);
//       }, i * delay);
//   }
// }

// printPyramid(50, 500); // 5 rows, 500ms delay between each row


const chalk = require('chalk');

function printLineWithDelay(line, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(line);
            resolve();
        }, delay);
    });
}

async function printColorfulTree(height) {
    const colors = [chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan, chalk.white, chalk.gray, chalk.hex('#FFA500')]; // Adding orange color
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '';
        for (let j = 0; j < 2 * i - 1; j++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            stars += color('*');
        }
        await printLineWithDelay(spaces + stars, 300);
    }

    // Tree trunk
    const trunkSpace = ' '.repeat(height - 1);
    const trunk = chalk.hex('#8B4513')('|');
    await printLineWithDelay(trunkSpace + trunk, 300);
    await printLineWithDelay(trunkSpace + trunk, 300);
    await printLineWithDelay(trunkSpace + trunk, 300);
}

printColorfulTree(10);

>>>>>>> 5bfcf05 (Initial Commit)
