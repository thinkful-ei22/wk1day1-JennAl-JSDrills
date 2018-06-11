'use strict';

const yearOfBirth = function (age){
   if(age < 0){
     throw new Error('Age can not be negative ');
   }
  return  2018-age;

}

try {
  yearOfBirth( -1);
} catch(e){
  console.error(e.message);
}

const whoAmI = function (name, age){
  if(name === '' || age === null){
    throw new Error ('Arguments not valid');
  }
  if(typeof name !== 'string' || typeof age !== 'number' ){
    throw new Error('You are old to drink');
  }

  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yearOfBirth(age)}.`);
};

try {
 // whoAmI('', 21);
  whoAmI(29, 'twenty nine');
}catch(e){
  console.error(e.message);
}


console.log(whoAmI('Jenn', 30));