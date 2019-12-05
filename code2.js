// Find Number is Even or Odd with just Single use of variable and if (Only IF)

function checkOddEven (number) {
    let result = (number%2==0); // Single Variable Declaration
    if(result == true)  // SIngle IF Statement
    {
        return "EVEN";
    }
    return "ODD";
}

console.log("Your Number is : "+checkOddEven(701)); // It will output as "EVEN or ODD"



//Try this 

function checkNumber(num){
 const me =  num % 2 === 0 ?"even":"odd";
  console.log("Your Number is"+ " " + me);
}
console.log(checkNumber(11));
