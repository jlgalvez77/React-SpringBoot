

function sayHello(name = 'Pepe', age = 0) {
    // console.log(`Hola mundo desde una funcion ${name}`);
    const greeting = `Hola mundo desde una función ${name} de edad ${age}`;
    return greeting;
}

const result = sayHello('Andrés', 10);

console.log(result)