  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  
function coinCounter(coins) {
  // if i take coins here, divide by .25, round down and then set that to equal quarters...
  coinPurse.quarters = Math.floor(coins / .25);
  // // take the result of that, subtract from the # of coins remaining and then divide by 10...
  coinPurse.dimes = Math.floor((coins - (coinPurse.quarters * .25))  / .10);
  // // take the result of that, subtract from the # of coins remaining and then divide by 5...
  coinPurse.nickels = Math.floor(coins - (coinPurse.quarters * .25) - (coinPurse.dimes * .10) / .05);
  // // take the result of that, subtact from the # of coins remaining and then divide by 1...
  coinPurse.pennies = Math.floor(coins - (coinPurse.quarters * .25) - (coinPurse.dimes * .10) - (coinPurse.nickels * .05) / .01);
  return coinPurse;
};