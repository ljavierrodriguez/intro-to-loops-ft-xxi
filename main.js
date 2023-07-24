/* Loops o Ciclos */
/* 

for(iterador; condition; increment){
    sentences
}

for ( index in collection ){
    sentences
}

for (value of collection){
    sentences
}


while(condition){
    sentences
}

do {
    sentences
} while (condition)


*/
//      1           2          4
for (let num = 1; num <= 10; num++) {
    console.log(num) // 3
}
//              0           1       2           3          4        5           6
let names = ["Genesis", "Rick", "Fernanda", "Claudio", "Alexis", "Sebastian", "Eduardo"];

console.log(names[2]);

for (let indice = 0; indice < names.length; indice++) {
    console.log(names[indice])
}

for (let indice in names) {
    console.log(indice)
    console.log(names[indice])
}

for (let name of names) {
    console.log(name)
}

let num = 1; // 1
while (num <= 10) { // 2
    console.log(num); // 3
    num++; // 4
}

let indice = 0;
while (indice < names.length) {
    console.log(names[indice]);
    indice++;
}


let i = 1;
do {
    console.log(i); // 1
    i++; // 2
} while (i <= 10); // 3

let j = 0;
do {
    console.log(names[j]);
    j++;
} while (j < names.length);


let fullname = "Luis Rodriguez";

for(let i = 0; i < fullname.length; i++){
    console.log(fullname[i])
}


for(let letter of fullname){
    console.log(letter)
}


names.forEach(function(valor, indice, arreglo){
    console.log("Valor: " + valor);
    console.log("Indice: " + indice);
    console.log("Arreglo: " + arreglo);
})

fullname.split("").forEach(function(letra, indice, arreglo){
    console.log(letra);
})


function sumar(num1, num2){
    return num1 + num2;
}

function operacion(callbackfn, num1, num2){
    return callbackfn(num1, num2);
}

operacion(sumar, 10, 10);

operacion(function(num1, num2){ return num1 - num2}, 10, 20)