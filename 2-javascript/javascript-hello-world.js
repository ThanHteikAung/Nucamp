
function getName() {
    const userName = prompt('what is your name');
    sayHello(userName)
}

function sayHello(name) {
    alert('Hello' + name + '!')
}

let produceType = "apple"
switch(produceType) {
    case "apple":
    case "persimmon":
    case "mango":
        console.log(produceType + " is a fruit.");
        //break;
    case "zucchini":
    case "carrot":
        console.log(produceType + " is a vegetable.");
        break;
    default: 
        console.log("Unknown produce type.");
}

let mlevel = "gold"
switch(mlevel){
    case "gold":
        console.log("Unlimited Free Plays");
        break;
    case "silver":
        console.log("VIP Room Access");
        break;
    case "bronze":
        console.log("VIP Room Access on Weekdays");
        break;
    default:
        console.log("Invalid membership level")
}