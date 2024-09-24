function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let curNum = i

        while (curNum > 0) {
            sum += curNum % 10;
            curNum = Math.trunc(curNum / 10);
        }

        answer = (sum === 5 || sum === 7 || sum === 11);
        console.log(answer ? `${i} -> True` : `${i} -> False`)

    }

}
specialNumbers(15)