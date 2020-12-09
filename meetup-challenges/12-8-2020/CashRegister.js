// function checkCashRegister(price, cash, cid) {
//   let change = {
//     status: undefined,
//     change: []
//   };

//   const coinsWorth = {
//     'PENNY': 0.01,
//     'NICKEL': 0.05,
//     'DIME': 0.10,
//     'QUARTER': 0.25,
//     'ONE': 1.00,
//     'FIVE': 5.00,
//     'TEN': 10.00,
//     'TWENTY': 20.00,
//     'ONE HUNDRED': 100.00
//   }

//   let amountDue = cash - price
//   for (let i = 0; i < cid.length; i++) {
    
//     const coin = cid[i]
//     if (coinsWorth[coin[0]] > amountDue) {
//       // pass
//     } else {
//       console.log(amountDue % coinsWorth[coin[0]])
//       while (coin[1] - coinsWorth[coin[0]] > 0 && amountDue % coinsWorth[coin[0]] === 0 && amountDue !== 0) {
//         amountDue -= coinsWorth[coin[0]]
//         coin[1] -= coinsWorth[coin[0]]
        
//         if (change.change.filter(change => change[0] === coin[0]).length > 0) {
//           change.change[change.change.length - 1][1] += coinsWorth[coin[0]]
//         } else {
//           change.change.push([coin[0], coinsWorth[coin[0]]])
//         }
//       }
//     }
//   }
  
//   if (change.change.length > 0 && amountDue === 0) {
//     change.status = "OPEN"
//   } else if (amountDue > 0) {
//     change.status = "INSUFFICIENT_FUNDS"
//     change.change = []
//   }
  
//   // console.log(amountDue)
//   return change;
// }
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
function checkCashRegister(price, cash, cid) {
  debugger;
  let change = {
    status: undefined,
    change: []
  };

  const coinsWorth = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1.00,
    'FIVE': 5.00,
    'TEN': 10.00,
    'TWENTY': 20.00,
    'ONE HUNDRED': 100.00
  }
  let amountDue = cash - price
  for (let i = cid.length - 1; i >= 0; i--) {
    const coin = cid[i]

    if (coinsWorth[coin[0]] <= amountDue) {
        while ((Math.floor(coin[1] / coinsWorth[coin[0]])) > 0 && amountDue - coinsWorth[coin[0]] > 0) {
          coin[1] -= coinsWorth[coin[0]]
          amountDue -= coinsWorth[coin[0]]
          console.log(amountDue)

          if (change.change.filter(change => change[0] === coin[0]).length > 0) {
          change.change[change.change.length - 1][1] += coinsWorth[coin[0]]
        } else {
          change.change.push([coin[0], coinsWorth[coin[0]]])
        }
        }
    }
  }
  // console.log(change)
  
  if (change.change.length > 0 && amountDue === 0) {
    change.status = "OPEN"
  } else if (amountDue > 0) {
    change.status = "INSUFFICIENT_FUNDS"
    change.change = []
  }
  // console.log(amountDue)
  return change;
}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])