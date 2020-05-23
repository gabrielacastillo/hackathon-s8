
function cambioDolar(cantidad, monto){
    return cantidad * monto;
}

function areaCirculo(radio){
    return Math.pow(Math.PI * radio, 2); 
}

function descendente(num1, num2, num3){
    let list=[];

    if (num1 > num2 && num1 > num3){
        list.push(num1);
       if(num2 > num3){
        list.push(num2);
        list.push(num3);
       }else{
        list.push(num3);
        list.push(num2);
       } 
    }

    if (num2 > num1 && num2 > num3){
        list.push(num2);
        if(num1 > num3){
         list.push(num1);
         list.push(num3);
        }else{
         list.push(num3);
         list.push(num1);
        } 
     }

    if (num3 > num1 && num3 > num2){
        list.push(num3);
        if(num1 > num2){
         list.push(num1);
         list.push(num2);
        }else{
         list.push(num2);
         list.push(num1);
        } 
    }

    return list;
}

console.log(cambioDolar(5, 3.2));
console.log(areaCirculo(4));
console.log(descendente(4,2,20));
//¿Cómo un algoritmo mejora el proceso o servicio de una empresa?
/*
Así que los CIOs que crean que el 'machine learning' solo puede ayudar 
a las grandes empresas, han de darse cuenta de que los algoritmos pueden 
mejorar diferentes procesos de la compañía en casi todos los sectores. 
Pueden ayudar a los médicos a predecir cómo un paciente responderá a una 
terapia o al departamento de recursos humanos a adivinar si un trabajador 
se marchará o no de la compañía a la primera de cambio. Así que los 
epartamentos de tecnología tendrán que comenzar a desarrollar sus propios 
algoritmos si quieren seguir siendo competitivos. 
*/