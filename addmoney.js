document.getElementById("add-money-btn").addEventListener("click", function(){
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select A Bank"){
        alert("please select a bank");
        return;
    }
    
    const accno = getValueFromInput("add-money-number");
    if (accno.length !== 11){
        alert("invalid number");
        return;
    }

    const ammount = getValueFromInput("add-money-amount");

    const newBalance = getBalance() + Number(ammount)
    // console.log(newBalance);

    const pin = getValueFromInput("add-money-pin");
     if(pin === "1234" && accno === "01925206470"){
    alert(`add money succesfull from 
        ${bankAccount} at ${new Date()}`)
    console.log("new balance", newBalance);
    document.getElementById('balance').innerText = newBalance;

    const history = document.getElementById('history-container');
    const newHistory = document.createElement('div')
    newHistory.innerHTML = 
     `<div class="transection-card p-5 bg-base-100">
    add money succesfull from 
        ${bankAccount} at ${new Date()}
            </div>`
        history.appendChild(newHistory);
   }
   else{
    alert("invalid Pin");
    return;
   }
})