
const selectedSeatEl = document.getElementById('selectedSeat');
const cnt = document.getElementById('count');
const total = document.getElementById('total');
const couponIn = document.getElementById('couponIn');
const couponBtn = document.getElementById('couponBtn');
const noSeatText = document.getElementById('noSeatText');
const grand = document.getElementById('grand');
const phone = document.getElementById('phone');



let SeatArray = []
let totalPrice = 0;
let grandTotal = 0;

function handleSearchSeat(e){
    if(SeatArray.includes(e.innerHTML)){
        alert('Seat already selected');
        return;
    } 
    else if(SeatArray.length < 4){
        noSeatText.style.display = 'none';
        e.classList.add('bg-primary'); 
        e.classList.add('text-white'); 
        SeatArray.push(e.innerText);
        cnt.innerHTML = SeatArray.length;
        selectedSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between">
        <span>${e.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>`; 
        totalPrice += 550;
        total.innerHTML = totalPrice;
    
        if(SeatArray.length == 4){
            couponIn.removeAttribute('disabled');
            couponBtn.removeAttribute('disabled');
        }
    } 
    else {
        alert('You can only select 4 seats');
    }
   
}


document.getElementById('couponBtn').addEventListener('click', function(){
    const inputValue = couponIn.value;
    const showApply = document.getElementById('showApply');

if(inputValue === 'NEW50' ){
        grandTotal = totalPrice - (totalPrice * 0.15);
        grand.innerHTML = grandTotal;
        showApply.innerHTML = `<p>Discount</p> <p> <span> - BDT: </span> <span>${totalPrice * 0.15}</span> </p> `;
    }
    else if(inputValue === 'Couple 20'){
        grandTotal = totalPrice - (totalPrice * 0.20);
        grand.innerHTML = grandTotal;
        showApply.innerHTML = `<p>Discount</p> <p> <span>-BDT: </span> <span>${totalPrice * 0.20}</span> </p> `;
    }
    else {
        alert('Invalid Coupon');
        return;
    }


});


phone.addEventListener('input', function(e){
    const inputVal = e.target.value;

    if(inputVal.length >= 11){
        document.getElementById('next-btn').removeAttribute('disabled');
    }
});


document.getElementById('btn-continue').addEventListener('click', function(){
    window.location.reload();
});