'use strict';
let rock=1;
let paper=2;
let scissors=3;
const computerChoice = Math.floor(Math.random() * 3) + 1;
const playerChoice = function(num){
  if (num !== 1 ||
    num !== 2 ||
    num !== 3 ){
    throw new Error('Please enter 1, 2, or 3');
  }
  if(num===1 && computerChoice===2){
    return 'Player wins!';
  }
  else if(num===2 && computerChoice===3){
    return 'Player wins!';
  }
  else if(num===3 && computerChoice===1){
    return 'Player wins!';
  }
  else if(num===1 && computerChoice===3){
    return 'Computer wins!';
  }
  else if(num===2 && computerChoice===1){
    return 'Computer wins!';
  }
  else if(num===3 && computerChoice===2){
    return 'Computer wins!';
  }
  else if(num===computerChoice){
    return 'It\'s a tie!';
  }
};
try{
  playerChoice(4);
}catch(e){
  console.error(e.message);
}

playerChoice(2);
