function sumDigits (num){
    let numString = num.toString();
    let result = 0

    for(let i = 0; i < numString.length; i++) {
        let curDigit = Number(numString[i])
        result += curDigit
    }
    console.log(result)

}
sumDigits(245678)