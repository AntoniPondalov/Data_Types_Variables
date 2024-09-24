function rightPlace (str,char,result) {
    let replacedStr = str.replace(`_`, char);
    let output = (replacedStr === result) ? 'Matched' : `Not Matched`
    console.log(output)
}
rightPlace ('Str_ng', 'I', 'Strong')