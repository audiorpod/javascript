/*
    Create a variable called "greeting" and initialize it to:
        "Hello, nice to meet you!"
    
    Use a loop to loop through this String (just like you would an array)
        - On each loop iteration, print out what is at that index

    WHY does this happen?
    WHAT is a String, really?
*/

var greeting = 'Hello, nice to meet you!';
for (var i = 0; i <greeting.length;i++) {
    console.log(greeting[i]);
}

/**
 
H
e
l
l
o
,
 
n
i
c
e
 
t
o
 
m
e
e
t
 
y
o
u
!

reason for this type of output because  String is an array of individual character 
 */