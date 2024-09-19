document.getElementById('addMoney').addEventListener('click',function(e){
    e.preventDefault(); // prevent the form from submitting
    const addedAmount = document.getElementById('add-amount').value;
    const addedAmountInt = parseInt(addedAmount);
    
    const balance = document.getElementById('balance').textContent;
    const balanceInt = parseInt(balance);

    const newBalance = balanceInt + addedAmountInt;
    document.getElementById('balance').textContent = newBalance;
    
});
document.getElementById('withdraw').addEventListener('click',function(e){
    e.preventDefault(); // prevent the form from submitting
    const withdrawAmount = document.getElementById('withdrawn-amount').value;
    const withdrawAmountInt = parseInt(withdrawAmount);
    
    const balance = document.getElementById('balance').textContent;
    const balanceInt = parseInt(balance);

    const newBalance = balanceInt - withdrawAmountInt;
    document.getElementById('balance').textContent = newBalance;
    
});