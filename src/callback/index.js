function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2, 8, sum))

// New exercice:

function date(callback) {

    console.log(`Date 1: ${new Date}`)

    setTimeout(() => callback(new Date), 3000)
}

const printDate = dateNow => console.log(`Date 2: ${dateNow} (Timeout 3000 ms)`)

date(printDate)