console.log('machine added')

function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

function getBalance(){
const balanceElement = document.getElementById("balance");
const balance = balanceElement.innerText;
console.log ("current balance", Number(balance));
return Number(balance);
}

function showOnly(id){
    console.log('clicked');
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cash-out');
    const history = document.getElementById('history');
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}