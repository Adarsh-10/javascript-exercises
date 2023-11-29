const palindromes = function (word) {
    word = word.replace(/[,.\s!]/g, '');

    let lowerWord = word.toLowerCase().split('');

    for (let i = 0; i < lowerWord.length / 2; i++) {
        if (lowerWord[i] !== lowerWord[lowerWord.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
