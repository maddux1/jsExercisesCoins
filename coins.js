var coinPurse = {
  quarters: .25,
  dimes: .1,
  nickels: .05,
  pennies: .01
};

var money = [];
function coinCounter(coins) {
  money.unshift( coins / coinPurse.quarters);
  money.unshift( coins / coinPurse.dimes ); 
  money.unshift( coins / coinPurse.nickels );
  money.unshift( coins / coinPurse.pennies );
};

coinCounter(.99);
console.log("Money Object =", money );