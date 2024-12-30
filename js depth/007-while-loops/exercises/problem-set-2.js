/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

let loop = 10;
while (loop <= 40) {
    if(loop % 2 == 0){
        console.log(loop);
    }
    loop++;
}

// odd no 

let loop1 = 10
while (loop1 <= 40 ){
    if(loop1 % 2 !== 0){
        console.log(loop1);
    }
    loop1++;
}