let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2])); // Te imprime el valor y el valor por dos

let hello = '            hello world      ';
console.log(hello);
console.log(hello.trimStart());
//console.log(hello.trimEnd);

try{

} catch {
    error
}

let entires = [["name", "Laura"], ["age", 39]];
console.log(Object.fromEntries(entires));

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);