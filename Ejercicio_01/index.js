// Importar nuestra dependencia que instalamos con 'npm i random'
import random  from "random";

// Creamos una función que genere números de forma aleatoria
function generateRandomNumbers() {
    let randomNumbers = [];
    for(let i = 0; i < 10000; i++){
        let randomNumber = random.int(1, 20);
        randomNumbers.push(randomNumber)
    }
    return randomNumbers;
}

let counts = {};

let randomNumbers = generateRandomNumbers();
randomNumbers.forEach(function(number) {
    if(!counts[number]) {
        counts[number] = 1;
    } else {
        counts[number]++;
    }
})

console.log(counts);