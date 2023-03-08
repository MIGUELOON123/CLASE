"use string";

let num1 = 15 ;
let num2 = 5 ;

/* Operadores Numericos */
/* Suma */

let result1 = num1 + num2;
console.error(result1);

/* Resta - */

let result2 = num1 - num2;
console.error(result2);

/* Multiplicacion * */

let result3 = num1 * num2;
console.error(result3);

/* Division / */

let result4 = num1 / num2;
console.error(result4);

/* Mod % */

let result5 = num1 % num2;
console.error(result5);


/* Operadores Logicos */

let num3 = "10";
/* mayor > mayor igual >= */
/* menor < menor igual <= */
/* asignacion = */
/* comparacion == y === */
/* negacion != y !== */
/* and && , or ||  */

if (num1 <= num3){
   
    console.log("num1 es menor o igual a num3")

}else{
    console.log("no es igual o menor")
}

let condition = (num1 > 5);
let condition2 = (num2 >= 5);
console.log( condition , condition2 );

if(condition && condition2){
    console.log("Son true")
}else{
    console.log("Una es falsa como ud sapa")
}

