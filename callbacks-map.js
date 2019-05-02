let words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
    let output = []
    array.forEach(function (item) {
        output.push(callback(item))
    })
    console.log(output)
}

let length = input => input.length;
let reverse = input => input.split('').reverse().join('');
let upperCase = input => input.toUpperCase();

map(words, length)
map(words, upperCase)
map(words, reverse)