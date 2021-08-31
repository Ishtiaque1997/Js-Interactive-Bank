//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click',function(){
 //get the deposited amount
 const depositInput=document.getElementById('deposit-input');//capturing by id
 const newDepositAmountText=depositInput.value;//getting the text value
 const newDepositAmount=parseFloat(newDepositAmountText);//convert the text to number
 // console.log (depositAmount);

//update deposit total
 const depositTotal=document.getElementById('deposit-total');//capturing previous amount of deposit by id
 const previousDepositText=depositTotal.innerText;//finding the text value
 const previousDepositAmount=parseFloat(previousDepositText)//convert the text to number
 const newDepositTotal=previousDepositAmount+newDepositAmount;//adding previous and new amount
 depositTotal.innerText=newDepositTotal;//setting the value

 //update account balance
const balanceTotal=document.getElementById('balance-total');//capturing previous amount of balance by id
const balanceTotalText=balanceTotal.innerText;//finding the text value
const previousBalanceTotal=parseFloat(balanceTotalText);//convert the text to number
const newBalanceTotal=previousBalanceTotal+newDepositAmount;//adding previous and new amount
balanceTotal.innerText=newBalanceTotal;//setting the value

 //clear the deposit input field
 depositInput.value='';

})
//handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click',function(){
 //get the withdraw amount
 const withdrawInput=document.getElementById('withdraw-input');//capturing by id
 const withdrawAmountText=withdrawInput.value;//finding the text
 const newWithDrawAmount=parseFloat(withdrawAmountText);//convert to number
 // console.log(newWithDrawAmount)

 //set withdraw total
 const withdrawTotal=document.getElementById('withdraw-total');//capturing previous amount of withdraw by id
 const previousWithDrawText=withdrawTotal.innerText;//finding the text value
 const previousWithDrawTotal=parseFloat(previousWithDrawText);//convert the text to number
 const newWithDrawTotal=previousWithDrawTotal+newWithDrawAmount;//adding previous and new amount
 withdrawTotal.innerText=newWithDrawTotal;//setting the value
 
 //update balance
 const balanceTotal=document.getElementById('balance-total');//capturing previous amount of balance by id
 const previousBalanceText=balanceTotal.innerText;//finding the text value
 const previousBalanceTotal=parseFloat(previousBalanceText);//convert the text to number
 const newBalanceTotal=previousBalanceTotal-newWithDrawAmount;//subtracting withdraw from balance
 balanceTotal.innerText=newBalanceTotal;//setting the value

 //clear withdraw input
 withdrawInput.value='';
})