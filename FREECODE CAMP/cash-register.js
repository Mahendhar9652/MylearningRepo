function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    let cidTotal = 0;
    for (let elem of cid) {
      cidTotal += elem[1] * 100;
    }
    if (change > cidTotal) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (change === cidTotal) {
      return { status: "CLOSED", change: cid };
    } else {
      cid = cid.reverse();
      let moneyUnits = {
        "ONE HUNDRED": 10000,
        TWENTY: 2000,
        TEN: 1000,
        FIVE: 500,
        ONE: 100,
        QUARTER: 25,
        DIME: 10,
        NICKEL: 5,
        PENNY: 1,
      };
      let result = [];
      for (let holder of cid) {
        let currentCurrencyUnit = moneyUnits[holder[0]];
        let currentCurrencyAmount = holder[1] * 100;
        let usedCurrencyAmount = 0;
        while (change >= currentCurrencyUnit && currentCurrencyAmount > 0) {
          change -= currentCurrencyUnit;
          currentCurrencyAmount -= currentCurrencyUnit;
          usedCurrencyAmount += currentCurrencyUnit;
        }
        if (usedCurrencyAmount > 0) {
          result.push([holder[0], usedCurrencyAmount / 100]);
        }
      }
      if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: result };
      }
    }
  }
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);