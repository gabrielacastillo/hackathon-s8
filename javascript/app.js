//Ejercicio 1
function suma(num1, num2) {
  return num1 + num2;
}

//Ejercicio 2
function promedio(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

//Ejercicio 3
function areaRectangulo(lado) {
  return Math.pow(lado, 2);
}

//Ejercicio 4
function areaTriangulo(lado) {
  return Math.pow(lado, 2) / 2;
}

//Ejercicio 5
function areaCircunferencia(radio) {
  return Math.PI * Math.pow(radio, 2);
}

//Ejercicio 6
function determinarSueldo(horasTrabajadas, salarioHora) {
  let diasLaborables = 5;
  return diasLaborables * horasTrabajadas * salarioHora;
}

//Ejercicio 7
function conversorMetrosToPulgadas(metros) {
  return metros / 0.0254;
}

//Ejercicio 8
function convertirSolesToDolares(soles) {
  let tc = 3.4;
  return soles / tc;
}

//Ejercicio 9
function determinarEdad(añoNacimiento) {
  return 2020 - añoNacimiento;
}

//Ejercicio 10
function determinarMenor(per1, per2, per3){
  let menor = per1;

  if(per2 < menor)
    per2 = menor;
  if(per3 < menor)
    per3 = menor;
  
  return menor;
}

//Ejercicio 11
function bonoAntiguedad(anios){
  let bono;
  
  if(anios <= 5)
    bono = anios * 100;
  else 
    bono = 1000;
  
  return bono;
}

//Ejercicio 12
function determinarSalario(sueldo){
  let i = 0;
  let sueldos = [];
  let suma = 0;

  while(i < 6){
    sueldo*=0.1;

    sueldos.push(sueldo);
    suma+=sueldo;
    
    i++;
  }

  return {"sueldos": sueldos, "suma": suma};
}

//Ejercicio 13
function calificaciones(notas){
  const NOTA_APROBATORIA = 12; 
  let aprobados = [];
  let reprobados = [];

  for (let i=0; i<notas.length; i++){
    if(notas[i] >= NOTA_APROBATORIA)
      aprobados.push(notas[i]);
    else 
      reprobados.push(notas[i]);  
  }

  return {"aprobados": aprobados, "reprobados": reprobados};
}

//Ejercicio 14
function contadorColores(lista){
  let i = 0;
  let verde = 0;//v
  let blanco = 0;//b
  let rojo = 0;//r
  
  do{

    if(lista[i] == "v")
      verde++;
    else if(lista[i] == "b")
      blanco++;
    else
      rojo++;

    i++;
  }while(i<lista.length);

  return {"verde": verde, "blanco": blanco, "rojo": rojo};
}

//Ejercicio 15
function puedeVotar(edad){
  let aniosProximaVotacion = 2021 - 2020;
  let edadEnProximaVotacion = edad + aniosProximaVotacion;
  
  return (edadEnProximaVotacion >= 18);
}

//Llamando a las Funciones
let ejercicio1 = suma(2, 4);
console.log("La suma es: "+ejercicio1);

let ejercicio2 = promedio(2, 4, 6, 8);
console.log("El promedio es: "+ejercicio2);

let ejercicio3 = areaRectangulo(4);
console.log("El area del rectangulo es: "+ejercicio3);

let ejercicio4 = areaTriangulo(4);
console.log("El area del triangulo es: "+ejercicio4);

let ejercicio5 = areaCircunferencia(4);
console.log("El area de la circunferencia es: "+ejercicio5);

let ejercicio6 = determinarSueldo(8, 15);
console.log("Su sueldo semanal es: "+ejercicio6);

let ejercicio7 = conversorMetrosToPulgadas(5);
console.log("La conversion de 5 metros en pulgadas es: "+ejercicio7);

let ejercicio8 = convertirSolesToDolares(120);
console.log("La cantidad en Dolares de 120 Soles es: "+ejercicio8);

let ejercicio9 = determinarEdad(2018);
console.log("Si nacio el 2018 su edad es: "+ejercicio9);

let ejercicio10 = determinarMenor(4, 8, 2);
console.log("El menor de 4, 8, 2 es: "+ejercicio10);

let ejercicio11 = bonoAntiguedad(4);
console.log("Su bono por Antiguedad de 4 anios es: "+ejercicio11);

let ejercicio12 = determinarSalario(4);
console.log("Su salario de 1500 es: "+ejercicio12);

let ejercicio13 = calificaciones([12, 13, 8, 5, 17]);
console.log("Los aprobados y desaprobados son: "+ejercicio13);

let ejercicio14 = contadorColores(['v','v','r','b','r']);
console.log("La cantidad por cada color es: "+ejercicio14);

let ejercicio15 = puedeVotar(16);
console.log("Puede Votar: "+ejercicio15);






