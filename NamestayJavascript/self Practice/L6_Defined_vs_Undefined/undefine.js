console.log(a); //  output undfined 
// Resion before allocating memory to var a its crate  a memory space  a with undefine the after running code it assign var a = 7 

// undefine is not empty and memory is allocated , its take its own memory 
// not define is not allocated memory 

var a = 7;
console.log(a);


//__________- Playing with decleared and not declared vale 

//-------------- java script is       * loosely typed language *     it is very felixable that you should define first or declare first it will not create any error 

var a; // undefine 
console.log(a);
a = 10;

if (a === undefined){
    console.log("is a undefined ")
}
else {
    console.log(" a is not undefined ")
}

// -------------------------- loosely typed language or weekly typed language ( this dosent means it is week)---------------------------
// in loosely typed language  we can declare a as integer and a as string etc 
var a;
console.log(a);
a=10;
console.log(a);
a = " hello world";
console.log(a);


// **** IMPORTANT  never declared any let,const,var as undefine eg a = undefine ; its a blunder 
