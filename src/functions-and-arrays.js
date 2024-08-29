// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {

    if (num1>=num2){
        return num1
    }
    else if (num2>num1){
        return num2
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longest = 0
    let longIndex = 0
    console.log(words)
    if (words.length === 0){
        return null
    }
    for (i=0;i<words.length;i++){
        console.log(i,words[i],words[longIndex])
        if (words[i].length>longest){
            longest = words[i].length;
            longIndex = i
            // console.log(words[longIndex])
        }
    }
    return words[longIndex]
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    sum = 0
    for (i=0 ; i<numbers.length ; i++){
        sum += numbers[i]
    }
    return sum
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    sum = 0
    let dividendo = null
    for (i=0 ; i<numbers.length ; i++){
        sum += numbers[i]
        dividendo ++
    }
    if (dividendo!==null){
        sum = sum/dividendo
    }
    return sum
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,wordToChech) {
    if (words2.length===0){
        return null
    }
    let existencia = (words2.includes(wordToChech))
    return existencia
}
