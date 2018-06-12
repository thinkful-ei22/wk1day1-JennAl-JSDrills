'use strict';

const computerChoice = Math.floor(Math.random() * 3) + 1;
const playerChoice = function(num){
  if(num < 0 || num > 3) throw new Error ('Please enter 1, 2, or 3');
  if(num===1 && computerChoice===2){
    return ' Paper beats rock, Player wins!';
  }
  else if(num===2 && computerChoice===3){
    return 'Scissors beats paper, Player wins!';
  }
  else if(num===3 && computerChoice===1){
    return 'Rock beats scissors, Player wins!';
  }
  else if(num===1 && computerChoice===3){
    return 'Rock beats scissors, Computer wins!';
  }
  else if(num===2 && computerChoice===1){
    return 'Paper beats rock, Computer wins!';
  }
  else if(num===3 && computerChoice===2){
    return 'Scissors beats paper, Computer wins!';
  }
  else if(num===computerChoice){
    return 'It\'s a tie!';
  }
};
try{
  console.log(playerChoice(1));
}catch(e){
  console.log(e.message);
}

