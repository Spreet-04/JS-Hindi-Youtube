const accountId = 14455321
let accoundEmail = "yyy@google.com"
var accountPassword = "12345566"
accountCity = "Jaipur"
let accounState;

// account Id = 2 // not allowed

accountEmail = "ps#ps.com"
accountPassword = "353524242"
accountCity = "Bengaluru"

console.log(accountId)


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accoundEmail, accountPassword, accountCity, accounState])