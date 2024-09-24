function login(input) {
    let username = input[0];
    let password = ``;

    for (let i = username.length - 1; i >= 0; i--) {
        let currentChar = username[i];
        password += currentChar;
    }
    
    let passCounter = 1;

    for (let i = 1; i < input.length; i++) {
        let passGuess = input[i];

        if (passGuess === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if(passCounter === 4) {
                console.log(`User ${username} blocked!`);
                break;
                
            }
            console.log(`Incorrect password. Try again.`)
        }
        passCounter++
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA'])