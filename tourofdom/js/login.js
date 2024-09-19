document.getElementById('login').addEventListener('click',function(e){
    e.preventDefault(); // prevent the form from submitting
    const num = document.getElementById('num').value;
    const pass = document.getElementById('pass').value;

    if(num == '123' && pass == '123'){
        window.location.href = 'dashboard.html';
        alert('Login Successful');
    }
    else{
        alert('Invalid Credentials');
    }
})