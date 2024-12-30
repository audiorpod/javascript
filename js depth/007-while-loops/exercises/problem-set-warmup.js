/*
    Create a while loop that prints out the numbers from 5 - 10 (inclusive)


    Your while loop syntax has an error and logical issue. Here's the corrected version and an explanation:

Correct Syntax:

let number = 1; // Initialize number
while (number <= 10) { 
    console.log(number); 
    number++;
}
Explanation of Issues:
Syntax Error: In your original code, you wrote:


while ( number <=10 ; number ++ ){
The condition inside the parentheses should not have a semicolon. It should just contain the logical condition, like this:


while (number <= 10)
Double Increment: You are incrementing number twice: once in the while condition and again inside the loop body. This would cause the loop to skip numbers. For example, if number starts at 1, it would increment to 2 after the first console.log and then increment again to 3 after the second number++.

Instead, increment number only once inside the loop.

Final Code (with Initialization):

let number = 1; // Start from 1
while (number <= 10) {
    console.log(number); // Print the current number
    number++; // Increment number
}
*/


while ( number <=10 ){
    console.log(number );
    number++;

}


