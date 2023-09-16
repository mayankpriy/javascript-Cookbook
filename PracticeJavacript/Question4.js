 /* #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300

*/

// solution

const billValue = 255;
const tipValue=15;
const higherTipValue=20;

const tipCalculator  =(billValue * tipValue)/100
const higherTipCalculator =( billValue * higherTipValue)/100;



if (billValue >=50 && billValue < 300){

console.log(`Your Bill is :  ₹${billValue} 
Tip added (${tipValue}% of bill value) :  ₹ ${tipCalculator} 
Your total Bill is : ₹${billValue+tipCalculator}`)

}
else if (billValue > 300)
{
    console.log(`Your Bill is : ₹${billValue} 
    Tip added (${higherTipValue}% of bill value) : ₹${higherTipCalculator} 
    Your total bill is : ₹${billValue+higherTipCalculator}`)
}

else 
{
    console.log(`Your Bill is : ₹${billValue}
    Tip added : ₹ 0
    Your total bill is : ₹${billValue}
    `)
}

//better way:

const bill = 555;
const tip= bill < 300 && bill >= 50 ? (bill*15)/100 : (bill*20)/100;

const finalBill = console.log(`The bill was : ₹ ${bill}
Tip Amount : ₹${tip}
Total Bill : ₹${bill+tip} `);