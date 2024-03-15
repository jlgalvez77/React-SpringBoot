

// const sayHello = (name = 'Pepe', age = 0) => {
//     const greeting = `Hola mundo desde una función flecha!! ${name} de una edad de ${age}`;
//     return greeting;
// }

const sayHello = (name = 'Pepe', age = 0) => `Hola mundo desde una función flecha!!! ${name} con una edad de ${age} años`

const result = sayHello('Andrés', 10);

console.log(result);