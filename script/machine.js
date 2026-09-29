// a machine to get input value from html directly . no need to write the function everytime

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

const cashoutBtn = document.getElementById("btn-cashout");
cashoutBtn.addEventListener('click', function(){

    const currentBalance = getBalance ()
    const cashoutNumber = getValueFromInput('agent-number');
    const cashoutAmount = getValueFromInput('cashout-amount');

    // const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText ; // necessary 
    // console.log( 'current balance $',balance)

    

    const newBalance = currentBalance - Number(cashoutAmount);
    alert('cashout successfull')
    console.log('New balance $',  newBalance)
    setBalance(newBalance);

    //transaction history
    const history = document.getElementById('history-container');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `  
  <div class="transaction-card p-5 bg-base-100">
  Cash Out ${cashoutAmount} Successful   from  ${cashoutNumber} at ${new Date ()}
  </div> 
   `;
   history.appendChild (newHistory);
   
    



    if(newBalance < 0){
        alert('insufficient balance');
        return;
    }
    if(cashoutNumber.length !== 11){
        alert('invalid number');
        return;

    }
    const pinNumber = getValueFromInput('cashout-pin');
    if(pinNumber !== '2525' && pinNumber.length !==4){
        alert('insufficient balance');
        return;
    }

    cashoutNumber.value = '01789413182';
    cashoutAmount.value = '25000'



    
})

const btnLogOut = document.getElementById('log-out');
btnLogOut.addEventListener('click',function(){
    window.location.assign('/index.html');


})