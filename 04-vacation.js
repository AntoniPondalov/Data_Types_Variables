function vacation(groupOfPeople, groupType, dayOfTheWeek) {
    let singlePrice = 0;
    switch (dayOfTheWeek) {
        case `Friday`:
            if (groupType === `Students`) {
                singlePrice = 8.45;
            } else if (groupType === 'Business') {
                singlePrice = 10.90;
            } else if (groupType === `Regular`) {
                singlePrice = 15;
            }
            break;

        case `Saturday`:
            if (groupType === `Students`) {
                singlePrice = 9.80;
            } else if (groupType === 'Business') {
                singlePrice = 15.60;
            } else if (groupType === `Regular`) {
                singlePrice = 20;
            }
            break;

        case `Sunday`:
            if (groupType === `Students`) {
                singlePrice = 10.46;
            } else if (groupType === 'Business') {
                singlePrice = 16;
            } else if (groupType === `Regular`) {
                singlePrice = 22.50;
            }
            break;
    }
    let totalPrice = groupOfPeople * singlePrice

    if(groupType === `Students` && groupOfPeople >= 30) {
        totalPrice *= 0.85;
    }else if(groupType === `Business` && groupOfPeople >= 100) {
        totalPrice -= singlePrice * 10;
    }else if(groupType === `Regular` && groupOfPeople >= 10 && groupOfPeople <= 20){
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(40, "Regular", "Saturday")