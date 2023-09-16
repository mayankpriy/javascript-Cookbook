/* #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement  */

/* Solution */

let marksMass= 95;
let marksHeight= 1.88;

let johnMass= 80;
let johnHeight= 1.75;

const marksBmi= marksMass/marksHeight ** 2;

console.log(`Marks height is: ${marksHeight}m  
Marks weight is : ${marksHeight}kg
Marks BMI is : ${marksBmi}`)

const johnBmi =johnMass/johnHeight ** 2;

console.log(`John height is: ${johnHeight}m  
John weight is : ${johnMass}kg
John BMI is : ${johnBmi}`)


const higherBMI= marksBmi>johnBmi?`Mark's BMI: ${marksBmi} is higher than John's BMI :${johnBmi}`:`John's BMI: ${johnBmi} is higher than Mark's BMI :${marksBmi}`;

console.log(higherBMI);