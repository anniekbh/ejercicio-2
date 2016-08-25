
var numero1;
var numero2;
var numero3;
var suma;
var promedio;

numero1=prompt("Ingrese primer numero");
numero2=prompt("Ingrese segundo numero");
numero3=prompt("Ingrese tercer numero");

suma=(parseInt(numero1) + parseInt(numero2) + parseInt(numero3));
promedio=suma / 3;

window.alert("su promedio es " + promedio);