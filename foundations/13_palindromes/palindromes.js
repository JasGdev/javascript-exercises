const palindromes = function (str) {
    newStr = str.replaceAll(' ', '')
                .replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
                .toLowerCase();
    console.log(newStr)

    return newStr === newStr.split('').reverse().join('');

    
};

// Do not edit below this line
module.exports = palindromes;
