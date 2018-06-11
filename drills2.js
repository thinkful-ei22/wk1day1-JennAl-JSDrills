'use strict';

// const jediName = function(firstName,lastName){
//   let jediFirst = lastName.slice(0,3);
//   let jediLast = firstName.slice(0,2);
//   return jediFirst+jediLast;   
// };

// console.log(jediName('Jennifer','Colna'));

const beyond = function(num){
  if (Number.isFinite(num) && num>0){
    console.log('To infinity');
  }
  else if (Number.isFinite(num) && num<0){
    console.log('To negative infinity');
  }
  else if(num===0){
    console.log('Staying home');
  }
  else {
    console.log('And beyond');
  }
};
beyond(0);