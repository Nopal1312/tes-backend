function reverseAlphabetWithNumber(input) {
    // Pisahkan huruf dan angka
    let letters = input.match(/[A-Z]/g).reverse().join('');
    let numbers = input.match(/[0-9]+/g).join('');
    return letters + numbers;
}

const inputString = "NEGIE1";
const result = reverseAlphabetWithNumber(inputString);
console.log(result); // Output: EIGEN1
