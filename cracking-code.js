
const decode = function(encode) {
    if (encode[0] === 'a'){
      return encode[1];
    } else if(encode[0] === 'b'){
        return encode[2];
    }else if(encode[0] === 'c'){
        return encode[3];
    } else if (encode[0] === 'd'){
        return encode[4]
    } else {
      return ' ';
    }
}


let craft = decode ("craft");
let block = decode ("block");
let argon = decode ("argon");
let meter = decode ("meter");
let bells = decode ("bells");
let brown = decode ("brown");
let croon= decode ("croon");
let droop= decode ("droop");

let decodedMessage = `${craft} ${block} ${argon} ${meter} ${bells} ${brown} ${croon} ${droop}`;

console.log(decodedMessage);
// console.log(decode('craft'));

