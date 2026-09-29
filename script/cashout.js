// const cashoutBtn = document.getElementById("btn-cashout");
// const cashoutPin = document.getElementById("cashout-pin");
// const cashoutAmountInput = document.getElementById("cashout-amount");
// const agentNumber = document.getElementById("agent-number");

// cashoutBtn.addEventListener("click", function () {
//   const cashoutNumber = agentNumber.value;
//   console.log(cashoutNumber);

//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   const currentBalance = document.getElementById("balance");
//   const currentBalanceValue = currentBalance.innerText;
//   console.log(currentBalanceValue);

//   // const newBalance = currentBalanceValue - cashoutAmount;
//   const newBalance = Number(currentBalanceValue) - Number(cashoutAmount);

//   if (cashoutAmount < 100) {
//     alert("invalid amount");
//     return;
//   }

//   if (cashoutNumber.length !== 11 ) {
//     alert("Invalid number");
//     return;
//   }

//   if (cashoutPin.value.trim() !== "9898") {
//     alert("Invalid pin ");
//     return;
//   }

//   if (cashoutAmount <= currentBalanceValue) {
//     alert("Transaction Succsessfull");
//     console.log("Your New Balance is $", newBalance);
//     currentBalance.innerText = newBalance;
//   } 
//   if(newBalance < 0){
//     alert('Insufficient Balance');
//     return;
//   }
 

  
// });
