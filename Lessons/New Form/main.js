//Password regular Expression

function passCheck(data){
    var passClass = document.getElementById('password-check');
    const lowerCase = new RegExp('(?=.*[a-z])');
    const upperCase = new RegExp('(?=.*[A-Z])');
    const decimal = new RegExp('(?=.*[0-9])');
    const eightChar = new RegExp('(?=.{8,})');
    const specialChar = new RegExp('(?=.*[!@#\;$%\^&\*])')
    if (eightChar.test(data)){
        passClass[0].style.color = "green";
    }
    else{
        passClass[0].style.color = "grey";
    }
    if (lowerCase.test(data)){
        passClass[0].style.color = "green";
    }
    else{
        passClass[0].style.color = "grey";
    }if (upperCase.test(data)){
        passClass[0].style.color = "green";
    }
    else{
        passClass[0].style.color = "grey";
    }if (decimal.test(data)){
        passClass[0].style.color = "green";
    }
    else{
        passClass[0].style.color = "grey";
    }if (specialChar.test(data)){
        passClass[0].style.color = "green";
    }
    else{
        passClass[0].style.color = "grey";
    }
    console.log(passCheck.test('Laure16042004@'));
}

//Number Regular Expression

function validation(){
    var userName = document.getElementById('usernamecheck').ariaValueMax;
    var mobilepattern = /^[0-9]{9}$/ ;

    if(mobilepattern.test(userName)){
        document.getElementById('usernamecheck').style.
        backgroundColor = 'green';
    }
    else{
        document.getElementById('usernamecheck').style.
        backgroundColor = 'red'
    }
}