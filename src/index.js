module.exports = function reverse (n) {
  
}

function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    ) 
    return num;                
  }

  console.log(reversedNum(23987))
  

  function reverse_a_number(n)
  {
      n = n + "";
      return n.split("").reverse().join("");
  }
  console.log(Number(reverse_a_number(32243)));


let number = 123456789;

// Initializing the result variable 
let result = 0;

while(number>0){
    // Getting the rightmost digit
    rightmost = number%10;
    
    result = result*10 + rightmost;
    
    // Removing the rightmost digit from the number
    number = Math.floor(number/10);
}

console.log("Reverse " +result)