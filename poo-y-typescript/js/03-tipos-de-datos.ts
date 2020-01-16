//Crear tipo de dato
type alfanumerico = string | number


//string
let cadena: alfanumerico = "Lautaro";

//number
let numero: number=12;


//boleano
let verdadero_falso: boolean = true;


//Any
let cualquiera: any = "hola"

// Arrays
var lenguajes: Array<string> = ["PHP","SQL","JAVASCRIPT"]

let years: number[] = [12,13,14,15];

//Multiples tipos de datos

let multiple: string | number= "Lautaro";

multiple = 12;

//let vs var
var numero1 = 10;
var numero2= 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log("dentro del bloque= "+numero1,numero2)
}
    console.log("fuera del bloque= "+numero1,numero2)

console.log(cadena, numero,verdadero_falso,cualquiera,lenguajes,years);
