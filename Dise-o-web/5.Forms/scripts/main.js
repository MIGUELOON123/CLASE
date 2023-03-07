"use strict";
/* Seleccionar Elemento Desde el Dom(index) */
/* Se Pueden Manipular Desde JS */

var elemento1; /* Global: no recomendado pa trabajar */
let elemento2; /* Local: recomendado */
const elemento3 = 1; /* Constante: dar valor */

const envio = document.getElementById("si");
const envio2 = document.getElementById("no");
const formulario = document.getElementById("form1")
console.log(envio)
/* Asociar evento al boton aceptar */
envio.addEventListener("click",()=>{
    event.preventDefault();
    console.log(formulario[0].value);
    console.log(formulario[1].value);
    console.log(formulario[2].value);
});
console.log(envio2)
/* Asociar evento al boton aceptar */
envio.addEventListener("click",()=>{
    event.preventDefault();
    console.log(formulario[0].value);
    console.log(formulario[1].value);
    console.log(formulario[2].value);
});