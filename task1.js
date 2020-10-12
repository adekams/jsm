/*
Given a sentence, write a function that returns the folowing:  
reversed cases, 
palndromes,
words ending in -ing
 */

var sentence = "maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar"


function reverseCase(str){
    //reverse case
    var text = ''
    for (var i=0; i < str.length; i++){
        var string = str.charAt(i)
        if (string == string.toLowerCase()){
            string = string.toUpperCase()
        }else{
            string = string.toLowerCase()
        }
        
        text += string
        reverse = text.split(" ")
    }
    //check all words starting with an uppercase
    uppercased = []
    for (var i=0; i < reverse.length; i++){
        if (reverse[i].charAt(0) === reverse[i].charAt(0).toUpperCase()){
            uppercased.push(reverse[i])
        }    
    }
    
    
    //check for palindromes
    //turn array to string, then into lowercase
    var words = uppercased.join(" ").toLowerCase().split(" ")
    var palindrome = []
    
    for (i=0; i < words.length; i++){ 
        if (words[i].split("").reverse().join("") === words[i]){            
            palindrome.push(words[i])
        }  
    }

    //words ending with -'ing'
    var ing= []
    for (i=0; i < words.length; i++){
    ending = 'ing'
        if (words[i].slice(-3) === ending){
            ing.push(words[i])
        }
    }
    

    var obj = {
        'uppercased': uppercased,
        'ing': ing,
        'palindrome': palindrome
        
    }
    console.log(obj)
    return obj
}
reverseCase(sentence)


