const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

// Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise All Settled (promise.all se rechaza en cuanto se rechace una de las proesas
// pero Promise.allSettled no importa el estado de las promesas simplemente va a esperar a que todas se resuelvan)
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve 1"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// Global This

console.log(window);
console.log(globalThis);

// Nuevo operador lógico: ?? is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined
const fooo = null ?? 'default string';
console.log(fooo);
const fooo2 = 'jah' ?? 'default string'
console.log(fooo2);


// Optional chaining (?.) enables you to read the value of a property located deep within a chain of connected objects 
// without having to check that each reference in the chain is valid.
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}


const user2 = {profile:{email: 'ejemplo@tudominio.com'}};
console.log(user2?.profile?.email);

if(user2?.profile?.email) {
    console.log(user2.profile.email)
} else{
    console.log('fail')
}