function printFibonacci(n) {
    let fstNumber=0;
    let sndNumber=1;
    let count=0;

    do {
        console.log(fstNumber)
        let temp=fstNumber + sndNumber; //1
        fstNumber = sndNumber //1
        sndNumber = temp //1
    } while (count++ < 10);
}

printFibonacci(10)

