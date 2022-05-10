const data = {
    frontend: 'Oscar',
    backent: 'Sara',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
const key = Object.keys(data);
console.log(key)
console.log(values);

const myString = 'hello';
console.log(myString.padStart(7, 'hi '))
console.log(myString.padEnd(12, ' _____'))
console.log('food'.padEnd(12, ' ______'))

const obj = {
    name: 'Laura', // Establece que puede haber tanto un valor detras del name como no
}

// Creamos funcion, creamso promesa y luego la invocamos

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        connsole.log(error);
    }
};
anotherFunction();