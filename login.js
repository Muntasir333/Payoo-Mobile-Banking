document.getElementById('login-btn').addEventListener('click', function(){
    // console.log('clicked');

    const number=document.getElementById('num');
    const bar = number.value;
    console.log(bar);
    const word = document.getElementById('pass');
    const power = word.value;
    console.log(power);
    if (bar == '01925206470' && power == '1234'){
        alert('log in succces');
        window.location.assign("home.html")
    }
    else{
        alert('wrong credential')
        return;
    }
})