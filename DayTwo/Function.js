// Function
// syntax

function functionName(parameter) {
    console.log("Statements")
}
functionName(parameter) // function call


// Fruit Shop
var OrangePrice = 10;
var ApplePrice = 20;
var BananaPrice = 10;

function itemAddition(org, app, ban) {

    var sum =  ( (org * OrangePrice) + (app * ApplePrice) + (ban * BananaPrice) % 12 )
    return sum;
}

var customerCost = itemAddition(1,1,1);
console.log("Total Cost" + " " + customerCost)


