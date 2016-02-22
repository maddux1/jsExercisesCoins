  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  
function coinCounter(coins) {
  // if i take coins here, divide by .25, round down and then set that to equal quarters...
  (coins / .25).mathFloor = coinPurse.quarters;
  // take the result of that, subtract from the # of coins remaining and then divide by 10...
  ((coins - (coinPurse.quarters * .25))  / .10).mathFloor = coinPurse.dimes;
  // take the result of that, subtract from the # of coins remaining and then divide by 5...
  ((coins - (coinPurse.quarters * .25) - (coinPurse.dimes * .10)  / .5)).mathFloor = coinPurse.nickels;
  // take the result of that, subtact from the # of coins remaining and then divide by 1...
  (coins - (coinPurse.quarters * .25) - (coinPurse.dimes * .10) - (coinPurse.nickels * .05) / .01).mathFloor = coinPurse.pennies;
  // and then ask it to return coinPurse... which I'm not sure I understand really....
  return coinPurse;
};

