const btnAddmoney = document.getElementById("btn-add");
btnAddmoney.addEventListener("click", function () {
  const bankName = getValueFromInput("add-bank");
  console.log(bankName);

  if (bankName == "Select bank") {
    alert("please select a bank");
    return;
  }
  const accountNumber = getValueFromInput("add-account");
  console.log(accountNumber);

  if (accountNumber.length !== 11) {
    alert("invalid account number");
    console.log("Invalid Account Number");
    return;
  }

  const addAmount = getValueFromInput("add-amount");
  console.log(addAmount);

  const currentBalanace = getBalance();
  console.log(currentBalanace);

  

  
  const pinNumber = getValueFromInput('add-pin');
  console.log(pinNumber)
  if(pinNumber.length == 4 ){
    alert(`Add Money Successful to ${bankName} from AC/ ${accountNumber} at ${new Date ()}`); // template literals used to write js/html inside of the ``.
    console.log('transaction successful')
    
  }else{
    alert('invalid pin number');
    return;
  }
  const newBalance = currentBalanace + Number(addAmount);
  console.log("new amount is $", newBalance);
  setBalance(newBalance);

  //transaction history
  const history = document.getElementById('history-container');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `  
  <div class="transaction-card p-5 bg-base-100">
  Add Money Successful to ${bankName} from AC/ ${accountNumber} at ${new Date ()}
  </div> 
   `;
   history.appendChild (newHistory);

});
