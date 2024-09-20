document.getElementById('addMoney').addEventListener('click',function(e){
    e.preventDefault(); // prevent the form from submitting
    // const addedAmountInt = getInputValue();
    const addedAmountInt = getValue('add-amount');
    
    const balanceInt = getBalance();

    const newBalance = balanceInt + addedAmountInt;
    document.getElementById('balance').textContent = newBalance;

    const p = document.createElement('p');
    p.textContent = `You have added $${addedAmountInt}. Your total balance is $${newBalance}`;

    document.getElementById('transaction-container').appendChild(p);

    
});
document.getElementById('withdraw').addEventListener('click',function(e){
    e.preventDefault(); // prevent the form from submitting
    // const withdrawAmountInt = getWithdrawAmount();
    const withdrawAmountInt = getValue('withdrawn-amount');

    
    const balanceInt = getBalance();

    const newBalance = balanceInt - withdrawAmountInt;
    document.getElementById('balance').textContent = newBalance;

    const p = document.createElement('p');
    p.textContent = `You have withdrawn $${withdrawAmountInt}. Your total balance is $${newBalance}`;

    document.getElementById('transaction-container').appendChild(p);
    
});