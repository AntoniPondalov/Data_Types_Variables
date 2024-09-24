function ascaiiValues(char1,char2,char3) {
    console.log (`${char3}${char2}${char1}`);

    let asciiCode1 = char1.charCodeAt();
    let asciiCode2 = char2.charCodeAt();
    let asciiCode3 = char3.charCodeAt();

    console.log (`${asciiCode3} ${asciiCode2} ${asciiCode1}`)

}
ascaiiValues(`a`, `b`, `c`)