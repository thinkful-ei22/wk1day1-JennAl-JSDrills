'use strict';

const jediName = function(firstName,lastName){
  let jediFirst = lastName.slice(0,3);
  let jediLast = firstName.slice(0,2);
  return jediFirst+jediLast;   
};

console.log(jediName('Jennifer','Colna'));