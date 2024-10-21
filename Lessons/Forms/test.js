const cryptoJs = require('crypto-js');

const encryptedPass = CryptoJs.AES.encrypt('jane','secretkey')
console.log(encryptedPass);