
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pw').value;

    // if(email.match(localStorage.setItem('userData', JSON.stringify(userData)))){
    //     alert('Account already exist.')
    // }
    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let number = /[0-9]/;
    // let number = /?=.*\d/;
    let specialCharacter = /[^A-Za-z0-9]/;
    // let specialCharacter = /?=.*\W/;


    if (email.length == 0 && password.length == 0) {
        alert('Please fill in email and password')
    } else if (email.length == 0) {
        alert('Please fill in email')
    } else if (password.length == 0) {
        alert('Please fill in password')
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters')
    } else if (!password.match(upperCase)) {
        alert('Please add an uppercase character')
    } else if (!password.match(lowerCase)) {
        alert('Please add a lowercase character')
    } else if (!password.match(number)) {
        alert('Please add a number')
    } else if (!password.match(specialCharacter)) {
        alert('Please add a special character')
    } else {
        const hasrshedPas = CryptoJS.SHA256(password).toString();
    

        // creating user object
        let userData = {
            email: email,
            password: hasrshedPas,
        }

        // saving to localstorage
        if (email.match(localStorage.setItem('userData', JSON.stringify(userData)))) {
            alert('Account already exist.')
        }
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Your details have been successfully saved to our system. Thanks')
    }
})

let retrievedData = localStorage.getItem('userData');
let parsedData = JSON.parse(retrievedData);

//ES5
let email1 = parsedData.email;
let pasword1 = parsedData.password;

//ES6
let { email, password } = parsedData;
console.log('this is the data coming from our local storage', parsedData);



let login = document.getElementById('login-form');

login.addEventListener('submit', (e) => {

    // data from loin form
    let loginemail = document.getElementById('email').value;
    let loginpassword = document.getElementById('pw').value;

    // data fro local storage
    let localretrievedData = localStorage.getItem('userData');
    let localparsedData = JSON.parse(localretrievedData);

    // destructuring localparsedData
    let { email: localstorageemail, password: localstoragepassword } = localparsedData;

    if (loginemail == localstorageemail && loginpassword == localstoragepassword) {
        alert(' Successfully login, You are welcome to our system')
    } else {
        alert("Invalid Credentials");
    }
});


