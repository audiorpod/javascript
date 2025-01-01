/*
    Create a variable called "bakery" that points to an array
    Fill the array with the following String:
        - "Cake"
        - "Cookie"
        - "Bread"
        - "Scone"

    Print out bakery to make sure it has these 4 Strings in it.

    Create another variable called "myBakery" and assign it
    to "bakery" that we declared previously

    Add the following items to "myBakery":
        - "Croissant"
        - "Granola"

    Print out myBakery and bakery and observe the contents.

    WHY is this?
*/

var bakery = ["cake", "Bread", "Cookie", "Scone"];
console.log(bakery);

var myBakery = bakery;
myBakery.push("Croissant","Granola");

console.log(myBakery);
console.log(bakery);

// This is because myBakery and bakery are both pointing to the same array in memory.