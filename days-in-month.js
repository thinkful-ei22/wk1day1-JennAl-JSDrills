const daysMonth = function (month, leapYear){
 if(   month !== 'January'
    || month !== 'February'
    || month !== 'March'
    || month !== 'April'
    || month !== 'May'
    || month !== 'June'
    || month !== 'July'
    || month !== 'August'
    || month !== 'September'
    || month !== 'October'
    || month !== 'November'
    || month !== 'December'
 ){
   throw new Error ('Must provide a valid month');
 }
  if(month === 'February' && leapYear === true){
    return 'February has 29 days!';
  } else if(month ==='February' && leapYear === false) {
    return 'February has 28 days!';
  }
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

    case 'April':
    case 'June':
    case 'September':
    case 'November':
    return `${month} has 30 days`;
    break;

  }

}

try {
  daysMonth ('apple');
}catch(e){
  console.error(e.message);
}

console.log(daysMonth('February' , false));