/*const num1=6,num2=10;
let suma=num1+num2;
console.log(`la suma entre ${num1} y ${num2} es ${suma}`);*/


//tipos de funciones en js (array function ,declaracion,array expresion,anonima )

const sumar=(num1,num2)=>{
    let suma=num1+num2;
console.log(`la suma entre ${num1} y ${num2} es ${suma}`);
}
exports.sumar=sumar;


//funcion resta 

function restar(num1,num2){
   let resta=num1-num2;
    console.log(`la resta entre ${num1} y ${num2} es ${resta}`)
}
exports.restar=restar;
//funcion multiplicacion
function multiplicacion(num1,num2){
    let multiplicacion=num1*num2
    console.log(`la multiplicacion entre ${num1} y ${num2} es ${multiplicacion}`)
}
exports.multipli=multiplicacion
//funcion divisio 

function divicion(num1,num2){
    let divicion = num1/num2
    console.log(`la divicion entre ${num1} y ${num2} es ${divicion}`)
}
exports.divicion=divicion
//funcion potencia 
function potencia(num1,num2){
    let potecia= Math.pow(num1,num2);
    console.log(`la poteciacion entre ${num1} y ${num2} es ${potecia}`)
} 
exports.potencia=potencia
//function abtraccion
function radicacion(num1,num2){
    let radicacion= Math.sqrt(num1,num2);
    console.log(`la radicacion entre ${num1} y ${num2} es ${radicacion}`)
} 
exports.radi=radicacion

/*const operaciones={}
operaciones.suma=sumar;
operaciones.restar=restar;

module.exports=operaciones;*/