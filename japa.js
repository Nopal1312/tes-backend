function countOccurrences(input, query) {
    const result = [];
    const inputCount = {};

    // Hitung kemunculan setiap kata dalam INPUT
    for (let word of input) {
        inputCount[word] = (inputCount[word] || 0) + 1;
    }

    // Hitung kemunculan kata dalam QUERY
    for (let q of query) {
        result.push(inputCount[q] || 0);
    }

    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const occurrences = countOccurrences(INPUT, QUERY);
console.log(occurrences); // Output: [1, 0, 2]
