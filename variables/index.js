// Definición General:
// Una variable es un nombre simbólico asociado a un espacio en la memoria que contiene un valor que puede cambiar. Se utiliza para almacenar información que el programa necesita manipular para realizar tareas.


// Declaración y Asignación:

// Declaración: Es el proceso de definir una variable, especificando su nombre y, en algunos lenguajes de programación, su tipo de dato.



// Tipos de Datos:

// Las variables pueden almacenar diferentes tipos de datos, como números enteros, decimales, caracteres, cadenas de texto, booleanos, entre otros. El tipo de dato determina qué tipo de valores puede almacenar la variable y las operaciones que se pueden realizar con esos valores.

// Number: Almacena tanto números enteros como decimales.
let entero = 42;
let decimal = 3.14;

// String: Almacena cadenas de texto, que son secuencias de caracteres.
let saludo = "Hola, mundo!";
let nombre = 'Juan';
let frase = `Es un día soleado.`;

// Boolean: Almacena valores de verdadero o falso.
let esVerdadero = true;
let esFalso = false;

// Undefined: Una variable que ha sido declarada pero no se le ha asignado un valor.
let sinDefinir;

// Null: Representa la ausencia intencional de cualquier valor objeto.
let valorNulo = null;

// Symbol: Un tipo de dato cuyos valores son únicos e inmutables.
let simbolo1 = Symbol('descripcion');
let simbolo2 = Symbol();

// Object: Un conjunto de propiedades y métodos, puede incluir arrays y funciones.
let persona = {
  nombre: 'Juan',
  edad: 30
};

let numeros = [1, 2, 3, 4]; // Array (tipo especial de objeto)

// BigInt: Representa números enteros de tamaño arbitrario.
let numeroGrande = BigInt(123456789012345678901234567890);

// Guía de Estilo para Definir Variables en JavaScript


// Nombres Significativos:

// Buena Práctica: Usa nombres de variables que sean descriptivos y reflejen claramente su propósito.

let age = 25; // Bien
let userAge = 25; // Bien

// Mala Práctica: Evita nombres de variables vagos o de una sola letra, a menos que se trate de variables temporales en bucles pequeños.

let a = 25; // Mal
let x = 25; // Mal

// Camel Case:

// Buena Práctica: Usa camelCase para nombres de variables, donde la primera palabra comienza con minúscula y cada palabra subsiguiente comienza con mayúscula.

let userName = 'John'; // Bien
let totalPrice = 100; // Bien

// Mala Práctica: Evita otros estilos como snake_case o PascalCase para nombres de variables.

let user_name = 'John'; // Mal
let TotalPrice = 100; // Mal

// Evitar Palabras Reservadas:

// Buena Práctica: No uses palabras reservadas de JavaScript como nombres de variables.
let myVar = 'example'; // Bien

// Mala Práctica: Usar palabras reservadas puede causar errores

// let class = 'example'; // Mal

// Declarar Variables con let o const:

// Buena Práctica: Usa const para valores que no cambian y let para variables que pueden cambiar su valor. Evita usar var.

const pi = 3.14159; // Bien
let userAgeOld = 30; // Bien

// Buena Práctica: Inicializa las variables cuando las declares siempre que sea posible.

let count = 0; // Bien
const name = 'Alice'; // Bien

// Mala Práctica: Declarar variables sin inicializarlas.

// let count; // Mal
// const name; // Mal
