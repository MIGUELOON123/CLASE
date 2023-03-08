"use string";
/* Tipos de Primitivos */

let var1 = 19;
let var2 = var1;

var1 = 29;

console.log(var1,var2);

/* Objetos */

let pet = {
    name: "Athenea",
    type: "Gata",  
    age: 3,
    vacine: ["Rabia","2","3"]    
}

let myPet = pet;
pet.name ="Tachala"
console.info(myPet);
