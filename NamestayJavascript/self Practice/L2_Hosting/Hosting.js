 getName();
 console.log(x);  // output : >>>>>>>> undefine 

 var x = 7;

 function getName(){
    console.log("My name is rupesh sahu ");
 }  

 // case 2 __-________________-____________-

 function getName(){
    console.log("My name is rupesh sahu ");
 } 

 console.log(getName);
 // after function we had printed getName function   // output : >>>>>>>> function getName(){
//     console.log("My name is rupesh sahu ");
//  } 



 // case 3 _______________________________

 console.log(getName);  // printed before functioin declared 
  /**
   * function getName(){ 
    console.log("My name is rupesh sahu ");
 } 
  */

 function getName(){
    console.log("My name is rupesh sahu ");
 } 


 // different type of function declaration 

 /// case 1 arraow function type --> JAVASCript will treat as VARIABLE in hosting REMEMBER  memory allocation and code compilation phase 1  and output will be undefine

 getName();
 console.log(getName);
 var getName = () => {
    console.log("My name is rupesh sahu ")
 }



 //------ case 2  JAVASCript will treat as VARIABLE in hosting REMEMBER  memory allocation and code compilation phase 1  and output will be undefine

 getName();
 console.log(getName);
 var getName = function() {
    console.log("My name is rupesh sahu ")
 }

/// ____________________________________________IMPORTANT CSE 3________________________________________
// JAVASCript will treat as function  in hosting REMEMBER  memory allocation and code compilation phase 1  and output will be a function code itself 

getName();
 console.log(getName);
 function getName() {
    console.log("My name is rupesh sahu ")
 }

