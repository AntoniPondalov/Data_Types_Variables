function amazingNumbers(num){
   num = num.toString();
    let sum = 0
    for(let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = (sum.toString().includes(`9`)) ? `True` : `False`;
    console.log(`${num} Amazing? ${result}`)

}
amazingNumbers(1233)