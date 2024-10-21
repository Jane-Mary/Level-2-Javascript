let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pw').value;

    //Regex
    let upperCase = /?=.*[A-Z]/;
    let lowerCase = /?=.*[a-z]/;
    let number = /?=.*\d/;// or  /?=.*[0-9];
    let specialCharacter = /?=.*[^A-Za-z0-9]/; // or /?=.*\W/

    if (email.length == 0 && password.length == 0) {
        alert('Please fill in email and password')
    } else if (email.length == 0) {
        alert('Please fill in email')
    } else if (password.length == 0) {
        alert('Please fill in password')
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters')
    }else if(password.match){
        alert('')
    }

    //Creating user object
    let userData = {
        email: email,
        password: password
    }

    //Saving to local storage
    //localStorage.setItem('email', email);
    //localStorage.setItem('password', password);
    localStorage.setItem('userData', JSON.stringify(userData))

})

//Retrieved Data
let retrievedData = localStorage.getItem('userData');
let parsedData = JSON.parse(retrievedData)
console.log(parsedData.email);

//ES5
let email1 = parsedData.email;
let password1 = parsedData.password;

//ES6
let { email, password } = parsedData;
console.log('This is the data from the local storage', parsedData.email);


let logIn = document.getElementById('log-in');

logIn.addEventListener('submit', (e) => {

    //data from login form
    let loginemail = document.getElementById('email1').value;
    let loginpassword = document.getElementById('pw1').value;

    //Data from local storage
    let localretrievedData = localStorage.getItem('userData');
    let localparsedData = JSON.parse(localretrievedData);

    //Destructuring localparsedData
    let { email: localstorageemail, password: localstoragepassword } = localparsedData

    if (loginemail == localstorageemail && loginpassword == localstoragepassword) {
        alert('Successfully logged in. You are welcome to our system')
    }
    else {
        alert('Invalid Credentials')
    }

})


// let submit = document.getElementById('submit');
// submit.addEventListener('click', event => {
//     let fname = document.getElementById('fname');
//     let lname = document.getElementById('lname');
//     let email = document.getElementById('email');
//     let date = document.getElementById('date');
//     let password = document.getElementById('password');
//     localStorage.setItem('user', JSON.stringify(fname.value));
//     localStorage.setItem('name', JSON.stringify(lname.value));
//     localStorage.setItem('email', JSON.stringify(email.value));
//     localStorage.setItem('date', JSON.stringify(date.value));
//     localStorage.setItem('password', JSON.stringify(password.value));
//     localStorage.getItem('user');
//})


