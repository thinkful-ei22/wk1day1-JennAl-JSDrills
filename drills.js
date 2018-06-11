'use strict';

const yearOfBirth = function (age){
  return  2018-age;
}


const whoAmI = function (name, age){
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yearOfBirth(age)}.`);

};




console.log(whoAmI('Jenn', 30));