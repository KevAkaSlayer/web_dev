document.getElementById('btn-cashout').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});


document.getElementById('btn-addmoney').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
});