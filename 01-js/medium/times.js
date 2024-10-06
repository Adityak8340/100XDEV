/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Record start time
    const start = new Date().getTime();

    // Calculate sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Record end time
    const end = new Date().getTime();

    // Return time difference in seconds
    return (end - start) / 1000;
}

// Test for different values of n
console.log("Time for sum from 1 to 100:", calculateTime(100), "seconds");
console.log("Time for sum from 1 to 100000:", calculateTime(100000), "seconds");
console.log("Time for sum from 1 to 1000000000:", calculateTime(1000000000), "seconds");