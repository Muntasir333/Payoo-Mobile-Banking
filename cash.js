// document.getElementById('cashout-btn').addEventListener('click', function(){
//    const cashoutnumberInput = document.getElementById("cashout-number");
//    const cashoutNumber = cashoutnumberInput.value;
//    console.log(cashoutNumber);

//    const cashoutAmountInput = document.getElementById("cashout-amount");
//    const cashoutAmount = cashoutAmountInput.value;
//    console.log(cashoutAmount)

//    const balanceElement = document.getElementById('balance');
//    const balance = balanceElement.innerText;
//    console.log(balance);

//    const newBalance = Number(balance)-Number(cashoutAmount);
   
//    if(newBalance<0){
//     alert("Invalid-ammount");
//     return
//    }

//    const cashoutPinInput = document.getElementById("Cashout-pin");
//    const pin = cashoutPinInput.value;
//    if(pin === "1234"){
//     alert("Cashout-Successfull")
//     console.log("new balance", newBalance);
//     balanceElement.innerText = newBalance
//    }
//    else{
//     alert("invalid Pin");
//     return;
//    }
// })
document.getElementById('cashout-btn').addEventListener('click', function(){
   const cashoutNumber = getValueFromInput("cashout-number");
   // console.log(cashoutNumber)
   if(cashoutNumber.length != 11){
      alert("invalid number");
      return;
   }
   const cashoutAmount = getValueFromInput('cashout-amount');
   
    const currentBalance = getBalance();

   

   const newBalance = currentBalance-Number(cashoutAmount);
   // console.log(newBalance);

    if(newBalance<0){
    alert("Invalid-ammount");
    return
   }

   const pin = getValueFromInput('Cashout-pin');
   if(pin === "1234" && cashoutNumber === "01925206470"){
    alert("Cashout-Successfull")
    console.log("new balance", newBalance);
    document.getElementById('balance').innerText = newBalance;
   }
   else{
    alert("invalid Pin");
    return;
   }
})