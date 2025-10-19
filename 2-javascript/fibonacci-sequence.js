function printFibonacci(n) {
    let fstNumber=0;
    let sndNumber=1;
    let count=1;

    do {
        console.log(fstNumber)
        let temp=fstNumber + sndNumber; //1
        fstNumber = sndNumber //1
        sndNumber = temp //1
    } while (count++ < n);
}

printFibonacci(5)

