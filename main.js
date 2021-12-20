// Strings, Numbers, Boolean, null, undefined


const name = 'Johnny';
const age = 30;

console.log('my name is ' + name + ' and I am ' + age);

// template string
console.log(`my name is  ${name} and i am  ${age}`)

const s = 'hel, vel, cel, technical';
  console.log(name.length);
  console.log(name.split(''));
  console.log(s.split(','))

  // Arrays




  const numbers = new Array(1,2,3,4,5);

  console.log(numbers);

    
const fruits = ['apples', 'oranges', 'pears', 45 ];


fruits[3] = 'grapes';
console.log(fruits);

fruits.unshift('mango');

fruits.pop();

console.log(fruits.indexOf('oranges'));

console.log(fruits);

//object literals

const person = {
    firstName: 'john',
    lastName: 'ham',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'robot sq',
        city: 'indore',
        state: 'MP'
    }
}

console.log(person);
