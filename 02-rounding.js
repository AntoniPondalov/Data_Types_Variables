function rounding(numberToBeRounded, prescision) {
    if (prescision > 15){
        prescision = 15
    }
    let formatedNum = numberToBeRounded.toFixed(prescision);
    let trimmedNum = parseFloat(formatedNum);
    console.log(trimmedNum)


}
rounding(3.1415926535897932384626433832795,2)