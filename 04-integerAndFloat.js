function integerAndFloat(num1,num2,num3){
    let sum = num1 + num2 + num3;

    let sumType = (sum % 1 !== 0) ? `Float` : `Integer`;

    console.log (`${sum} - ${sumType}`)

}
integerAndFloat(100, 200, 303)