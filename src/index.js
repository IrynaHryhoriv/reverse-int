module.exports = function reverse (n) {
  return reversedNum(n);
}

function reversedNum(num) {
    let numReversedStr = num.toString().split('').reverse().join('');
    let out = parseFloat(numReversedStr);
    return out;       
}