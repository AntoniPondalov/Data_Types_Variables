function gladiatorExpenses(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let expenses = 0;
    let shieldBreaks = 0;

    for(let curLostFight = 1; curLostFight <= lostFightsCount; curLostFight++) {
        if(curLostFight % 2 === 0){
            expenses += helmetPrice;
        }
        if(curLostFight % 3 === 0) {
            expenses += swordPrice;
        }
        if(curLostFight % 2 === 0 && curLostFight % 3 === 0){
            expenses += shieldPrice;
            shieldBreaks++
        }
        if(shieldBreaks % 2 === 0 && shieldBreaks !== 0){
            expenses += armorPrice;
            shieldBreaks = 0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)

}
gladiatorExpenses(7, 2, 3, 4, 5)