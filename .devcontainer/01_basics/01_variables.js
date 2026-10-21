const accountId = 114456
let accountEmail = "iamvengeance945@gmail.com"
var accountPassword = "546781"
accountCity ="Kolkata"
let accountState;
/*
prefer not to use var since it has issues in block scope and functional scope instead use let for variables 
*/
// accountId = 2 not allowed
accountEmail= "hdfc@gmail.com"
accountPassword= "123456"
accountCity="Delhi"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);