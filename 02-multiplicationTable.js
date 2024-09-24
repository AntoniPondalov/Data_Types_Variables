function multiplicationTable(input) {
    let secondFactor = Number(input[0]);

    for(let firstFactor = 1; firstFactor <= 10; firstFactor++) {
        let result = firstFactor * secondFactor; 
        console.log (`${firstFactor} * ${secondFactor} = ${result}`)

    }
}
multiplicationTable (["5"])