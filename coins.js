
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  

function coinCounter(coins) {
  (coins / .25).mathFloor = coinPurse.quarters;
  (coins / .10).mathFloor = coinPurse.dimes;
  (coins / .5).mathFloor = coinPurse.nickels;
  (coins / .1).mathFloor = coinPurse.pennies;
  return coinPurse;
};

console.log("Meh?", coinCounter(.87));

