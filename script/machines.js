// a machine to get input value from html directly . no need to write the function everytime

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('current balance $', Number(balance))
    
    return Number(balance);
}

function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value; 
}

function showOnly (id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const sendOut = document.getElementById('send-out');
    const getBonus = document.getElementById('get-bonus');
    const payBill = document.getElementById('pay-bill');
    const tranHistory = document.getElementById('tran-history');

    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    sendOut.classList.add('hidden');
    getBonus.classList.add('hidden');
    payBill.classList.add('hidden');
    tranHistory.classList.add('hidden');

    const showItems = document.getElementById(id);
    showItems.classList.remove('hidden');
}