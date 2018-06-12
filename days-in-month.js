const daysMonth = function (month, leapYear){

  switch (month){
    case 'January':
    case 'March' :
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
    return `${month} has 31 days`;
    break;

    case 'February':
    if(leapYear === true ) return 'February has 29 days!';
    return 'February has 28 days';
    break;

    case 'April':
    case 'June':
    case 'September':
    case 'November':
    return `${month} has 30 days`;
    break;
    default:
      throw new Error ('Must provide a valid month');
  }

}

try {
  daysMonth ('apple');
}catch(e){
  console.error(e.message);
}

console.log(daysMonth('April', false));