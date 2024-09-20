//  normal for understanding

function getInputValue() {
    const addMoney = parseFloat(document.getElementById('add-amount').value);
    return addMoney;
}

function getBalance() {
    const balance = parseFloat(document.getElementById('balance').textContent);
    return balance;
}


function getWithdrawAmount() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawn-amount').value);
    return withdrawAmount;
}



// usual scenario


function getValue(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}


// show section function

function showSection(section) {

    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(section).classList.remove('hidden');
}
