// REDUCE

// sintassi

// arrayName.reduce((accumulator, curElem, index, array) => {return operazione da fare});


// Accumulator = elemento al quale viene aggiunto curElem
// curElem = elemento successivo
// index = posizione dell'elemento
// array = elementi dell'array
// alla partenza accumulator è il primo elemento dall'array e cambia quando viene incrementato con curElem
// le operazioni vengono fatte dal primo all'ultimo elemento in ordine dal primo all'ultimo
// è possibile eseguire le operazioni dall'ultimo elemento al primo con reduceRight()


// array di parole

const words = ['hello', 'world', 'how', 'are', 'you'];

const phrase = words.reduce((accumulator, curElem) => {
  // console.log(`accumulator: ${accumulator}, curElem: ${curElem}`);    
  return accumulator + ' ' + curElem;
});

 console.log(phrase);

// array di numeri

const numbers = [2, 12, 4, 11, 6];

// somma

let sum = numbers.reduce(sumFunction);

function sumFunction(accumulator, curElem) {
  // console.log(`accumulator: ${accumulator}, curElem: ${curElem}`);  
  return accumulator + curElem;
}

console.log(sum)

// sottrazione

let subtraction = numbers.reduce(subtractionFunction);

function subtractionFunction(accumulator, curElem) {
  return accumulator - curElem;
}

console.log(subtraction)

// moltiplicazione

let multiplication = numbers.reduce(multiplicationFunction);

function multiplicationFunction(accumulator, curElem) {
  return accumulator * curElem;
}

console.log(multiplication)

// divisione

let division = numbers.reduce(divisionFunction);

function divisionFunction(accumulator, curElem) {
  return accumulator / curElem;
}

console.log(division)

// confronto

function getMaxNumber(numbers) {
  return numbers.reduce((accumulator, curElem) => curElem > accumulator ? curElem : accumulator);
}

console.log(getMaxNumber(numbers));


function getMinNumber(numbers) {
    return numbers.reduce((accumulator, curElem) => curElem < accumulator ? curElem : accumulator);
  }
  
console.log(getMinNumber(numbers));

/**************************************************************************************************/

// prendiamo in considerazione l'esercizio snack 1 

const bicycle= [
    { name: 'Bianchi', weight: 8 },
    { name: 'Atala', weight: 9 },
    { name: 'Olmo', weight: 7 }, 
    { name: 'Casati', weight: 11 },
    { name: 'Colnago', weight: 6 },   
  ];

// Fino ad ora avremmo dovuto fare un ciclo for o forEach per individuare il numero minore o maggiore all' interno di un array

let bikeLight = bicycle[0]

bicycle.forEach(({ name, weight }) => {
  if (weight < bikeLight.weight) {
    bikeLight = { name, weight };
  }
});


//  se invece volessimo utilizzare reduce per individuare la bici con peso minore

let bicycleLight = bicycle[0]

bicycleLight = bicycle.reduce((accumulator, curElem) => {
    return curElem.weight < accumulator.weight ? curElem : accumulator;
});
  
console.log(`La bici più leggera è la ${bicycleLight.name} con peso di ${bicycleLight.weight} kg`);

/****************************************************************************************************/





