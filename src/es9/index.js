const obj = {
    name: 'Laura',
    age: 39,
    country: 'ES'
  };

let { country, ...all } = obj;
console.log(all);

const obj2 = {
    name: 'Laura',
    age: 39,
  };

  const obj3 = {
      ...obj2,
    country: 'ES'
  };

  console.log(obj3);

  const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))
    })
  };

  const helloWorld1 = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout (() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
  };

  helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2018-12-12');
    const year = match[1]
    const month = match[2]
    const day = match[3]

    console.log(year, month, day);
