/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ^
*/

const planets = ["Mercury", "Venus", "Earth", "Mars"];
planets.push("Jupiter"); // add to the end of the array
console.log(planets);
planets.unshift("Sun"); // add to start of the array

planets.pop(); // remove
planets.pop(); // remove
console.log(planets);

planets.shift();// remove from start of the array
planets.shift(); // remove from start of the array
console.log(planets);

