const nameOutputEl = document.getElementById("name-output");
const clearNamesEl = document.getElementById("clear-output");

console.log("loaded")
let names = ["Michele", "Denise", "Aubrie", "Jack", "Phil",
    "Lee", "Same", "John", "Frank", "Smith"];


function generateRandomNames() {
    const randomNames = []
    for (let i = 0; i < 4; i++) {
        const fournames = names[Math.floor(Math.random() * names.length)];
        randomNames.push(fournames)
    }
    nameOutputEl.textContent = randomNames 
    }

function clearNames() {
    document.getElementById(fournames)
}
console.log(generateRandomNames())




/* let names = ["Michele", "Denise", "Aubrie", "Jack", "Phil", "Lee", "Same", "John", "Frank", "Smith"];
function randomFunc(names) {
    const randomNames = []
    for (let i = 0; i < 4; i++) {
        const random = names[Math.floor(Math.random() * names.length)];
        randomNames.push(random)
    }
    return randomNames
}
console.log(randomFunc(names)); */

nameOutputEl.onclick = generateRandomNames;
clearNamesEl.onclick = clearNames;


// console.log('Hello World');

// let names = ['Michele', ' Felipe', 'Aubrie', 'Denise', 'Elaina', 'Morely', 'Paris', 'Sophe', 'Carol', 'John'];

// function generator() {
// document.getElementById("name").innerHTML = 
//         names[Math.floor(Math.random()* names.length)] + ", " + 
//         names[Math.floor(Math.random()* names.length)] + ", " +
//         names[Math.floor(Math.random()* names.length)] + ", " +
//         names[Math.floor(Math.random()* names.length)] + '.';
//     }