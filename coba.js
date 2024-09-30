function longest(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = longest(sentence);
console.log(longestWord); // Output: mengerjakan
