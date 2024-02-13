const accountId = 121111
let accountName = "Anshul"
var accountEmail = "anshulagarwal12121@google.com"
accountCity= "Jaipur"
/*
var not used because it cause issue in both block scope and also in functional scope
accountCity not good to use
*/

let accountState;


console.table([accountId,accountName,accountEmail,accountCity, accountState])