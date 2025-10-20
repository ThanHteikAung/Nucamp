function printFibonacci(n) {
    let fstNumber = 0;
    let sndNumber = 0;
    let temp = 0;
    let result = 0;
    let arrFibRes = new Array  // create new array for to show fibonacci number list
    for (let count = 0; count < n; count++) {
        temp = result
        if (sndNumber < 1) {
            sndNumber++
        } else {
            result = fstNumber + sndNumber
            fstNumber = temp;
            sndNumber = result;
        }
        arrFibRes.push(result);
        console.log(result);
    }
    return arrFibRes;
}

function printCheckEven(arrFibonacci) {
    let evenFibonacciNumber = new Array;
    for (let arrIndex = 0; arrIndex < arrFibonacci.length; arrIndex++) {
        let arrFibonacciData = arrFibonacci[arrIndex];
        if (arrFibonacciData % 2 === 0) {
            evenFibonacciNumber.push(arrFibonacciData)
        }
    }
    return evenFibonacciNumber
}

function printSum(arrFibonacci) {
    let sumFibonacciNumber = 0;
    for (let arrIndex = 0; arrIndex < arrFibonacci.length; arrIndex++) {
        let arrFibonacciData = arrFibonacci[arrIndex];
        sumFibonacciNumber = sumFibonacciNumber + arrFibonacciData
    }
    return sumFibonacciNumber;
}

function printCheckFibonacciNumber(arrFibonacci, inputValue) {
    let arrFibonacciData = new Array
    let inputData = Number(inputValue)
    arrFibonacciData = arrFibonacci
    const strFiboNum = "The number is a Fibonacci number";
    const strNotFiboNum = "The number is not a Fibonacci number";
    if (arrFibonacciData.includes(inputData)) {
        return strFiboNum;
    } else {
        return strNotFiboNum;
    }
}


function getSeqNumber() {
    let inputValue = 0;
    let allOutputFibonacci = 0;
    let evenOutputFibonacci = 0;
    let sumOutputFibonacci = 0;
    let bolCheckFibonacci = true;
    let arrListFibonacci = new Array;

    inputValue = document.getElementById('seqNumber').value;
    arrListFibonacci = printFibonacci(inputValue);

    allOutputFibonacci = arrListFibonacci.toString();
    document.getElementById('txtSeqNumber').innerText = allOutputFibonacci;

    evenOutputFibonacci = printCheckEven(arrListFibonacci)
    document.getElementById('txtEvenNumber').innerText = evenOutputFibonacci;

    sumOutputFibonacci = printSum(arrListFibonacci)
    document.getElementById('txtSumNumber').innerText = sumOutputFibonacci;

    bolCheckFibonacci = printCheckFibonacciNumber(arrListFibonacci, inputValue)
    document.getElementById('txtCheckFibo').innerText = bolCheckFibonacci;
    console.log("data")
}

function getValueFromInput() {
    console.log("hello")
    alert("hello");
    const inputValue = document.getElementById('myInput').value;
    console.log("Input Value:", inputValue);
}