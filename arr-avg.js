


//*** Find a average of odds numbers in given arrays***

function avgOddNum(numbers) {

    let odd = [];
    for (const num of numbers) {
        if (num % 2 === 1) {
            odd.push(num);

        }
    }

    let sum = 0;
    for (const number of odd) {
        sum = sum + number;
    }

    const length = odd.length;
    const avg = sum / length;
    const resultAvg = avg.toFixed(2)
    return resultAvg;
}
const array = [34, 43, 23, 21, 65, 15, 45, 78, 98, 77];
const avg = avgOddNum(array);
// console.log(avg);


// *** Find a average  of even numbers in given arrays 


function avgOfEvenNum(numbers) {
    let evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evens.push(number);
        }
    }

    let sum = 0;
    for (const num of evens) {
        sum = sum + num;
        
    }

    const arrLength = evens.length;
    const resultAvg = sum / arrLength;
    return resultAvg;
}

const arrayNumbers = [56, 36, 34, 23, 65, 76, 87, 64, 87, 97, 35];
const averages = avgOfEvenNum(arrayNumbers);
console.log(averages);
