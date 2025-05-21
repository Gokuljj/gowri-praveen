// function firstFunction(a, b, c) {
//     var sum = a + b + c;
//     console.log(sum)
    
// }
// firstFunction(10, 12, 13)

// syntax 
// function functionName(parameter) {
//     console.log("Statement")
// }
// functionName(parameter) // function call

// rainLog 

// function rainLog(israin) {
//     if (israin === true) {
//         console.log("dont go outside")
//     } else {
//         console.log("you can go")
//     }
// }

// rainLog(true)

// function govJob(age) {
//     if (age > 60)  { // 61 > 60
//         console.log("over age not eligible");
//     } else if (age >=18) {
//         console.log("your are eligible");
//     } else if (age < 18) {
//         console.log("low age not eligible");
//     } else {
//         console.log("please enter the valid age in numbers");
//     }
// }
// govJob("jdld")

// Salon App

// salon Details
var salonName = "Mens Salon";
var salonlocation = "Udumalpet";
var welcomeText = "Welcome to Men's salon";
// var isOpen = true

// console.log(salonName);
console.log(welcomeText);
console.log(salonlocation);



function salonAvailableFunction(salonAvailable) {
    if (salonAvailable > 9) {
        console.log("opens")
    } else {
        console.log("closed")
    }
}
salonAvailableFunction(10)


// salon's Services
var hairCut = 150;
var beardTrim = 100;
var facial = 100;
var hairWash = 50;

// billing System 
function billingSystem(hc, bt, fl, hw) {
    var additonServices = (hc * hairCut) + (bt * beardTrim) + (fl * facial ) + (hw * hairWash)
    // console.log(additonServices)
    return additonServices
}
var serviceNoOffer = billingSystem(1,0,1,0)
console.log("Your Bill = " + serviceNoOffer)

// offers 
function offerFunction() {
    if ( serviceNoOffer > 200) {
        var offerCalculate = serviceNoOffer * 0.9;
        return offerCalculate
    }
}
var finalCost = offerFunction()
console.log("Your bill with 10% Offer = "+finalCost)