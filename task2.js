// 1. function replaceString
var word = prompt('Enter word')
function replaceString(word, search, replaceWith){
    var replace = word.replace(search, replaceWith)
    console.log(replace)
}replaceString(word, /u/g, 'v')


// 2. function changeCase
var sentence = prompt("Enter text to change its case")
var toCase = prompt("enter upper to change to uppercase or lower to change to lowercase")

function changeCase(sentence, toCase) {
    var newCase = toCase.toLowerCase()
    var newSentence = ''
    if (newCase === 'lower') {
        newSentence = sentence.toLowerCase()
    }else if (newCase === 'upper') {
        newSentence = sentence.toUpperCase()
    }else{
        alert("please enter 'upper' or 'lower' to change case")
    }
    return newSentence
}changeCase(sentence, toCase)

// 3. function trimEdges
var sentence ="  Hello There!  ";
function trimEdges(sentence) {   
    var trimmed = sentence.trim();
    console.log(trimmed);
}trimEdges(sentence)

// 4. function extraString
var sentence = prompt("Enter sentence")
//start = parseInt(prompt('enter number to start extraction'))
//end = parseInt(prompt('enter number to end extraction'))
function extraString(sentence, start, end) {
    if((start != '' && start != isNaN) && (end != '' && end != isNaN)) {
        var  extracted = sentence.slice(start, end)
        console.log(extracted)
    }else{
        console.log("start and end must be integers")
    }    
}extraString(sentence, 2, 6)

// 5. function getInitals
var name = prompt("please enter a name seperated by ' '")
function getInitials(name) {
    var text = name.split(" ")
    var initial = ''
    for (i=0; i < text.length; i++){
        initial += text[i].charAt(0).slice(0, 1).toUpperCase()       
    }                
    console.log(initial)
}getInitials(name)

