function reversedString(string){
    let result = ``
    
    for(let i = string.length - 1; i >= 0; i--) {
        let curLetter = string[i]; 
        result += curLetter;
    }
    console.log(result)

}
reversedString('Information')