"use strict";

let num1=0;
let num2=0;
let operations=2;
let resultado=0;

num1 = parseFloat(prompt("Ponga  un #"));
num2 = parseFloat(prompt("Ponga otro #"));
operations = parseInt(prompt("Que operacion desea realizar : \n1.Suma \n2.Resta \n3.Multiplicacion \n4.Division"));

switch(operations){
case 1:
    resultado = num1 + num2; 
break;
case 2:
    resultado = num1 - num2;
break;
case 3:
    resultado = num1 * num2;
break;
case 4:
    if( num2 == 0 ){
        alert('Papi no puede dividir entre 0 es pendejo o que socio');
    }else{
    resultado = num1 / num2;
    }
break;
}
alert('El resultado de la operacion es: '+resultado);

