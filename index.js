function scuberGreetingForFeet(distance){
  if (distance < 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance < 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  const checkCity = city === 'NYC' ? 'Ok, sounds good.' :  'No go.';
  return checkCity;
}

function switchOnCharmFromTip(tip){
  let msg;
  switch (tip) {
    case 'generous' :
      msg = 'Thank you so much.';
      break;
    case 'not as generous' :
      msg = 'Thank you.';
      break;
    default :
      msg = 'Bye.'
      break;
  }
  return msg;
}