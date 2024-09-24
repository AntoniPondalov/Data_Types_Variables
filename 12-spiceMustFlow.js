function spiceMustFlow(startingYield) {
    let totalAmount = 0;
    let days = 0;

    while (startingYield >= 100) {
        days++;
        totalAmount += startingYield;
        startingYield -= 10;

        if (totalAmount >= 26) {
            totalAmount -= 26;
        }
    }
    if (totalAmount >= 26) {
        totalAmount -= 26;
    }
    console.log(days);
    console.log(totalAmount)

}
spiceMustFlow(111)