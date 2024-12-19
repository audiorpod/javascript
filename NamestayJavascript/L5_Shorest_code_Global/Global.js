// Anything which is not inside in  the function block is called global function 

var a = 10;
function b(){
    //console.log(hello);
    var x = 10;
}
console.log(window.a);
console.log(a);
console.log(this.a);

// this all console log window.a , a , this.a, all refer to a single memory space 



// shortest program in js is no code 

