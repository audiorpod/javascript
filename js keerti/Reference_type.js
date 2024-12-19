// Reference Type - Object, Arrays, Functions

let courses ={
    title: "HHLD",
    description: "project",
    rating: 5
};

console.log(courses);
console.log(typeof(courses));
console.log(courses.title);
console.log(courses.rating); // to access inside object-> dot notation
console.log(courses["title"]); //to access inside object -> bracket  notation



//________________________________________________________________________________

// VALUE TYPE VS REFERENCE TYPE

let x = "rupesh";
let y = x; //output : here values get copied from x;

x = "ram";

console.log(x);
console.log(y);

// lets try on object


// all value type will be copied by value type
let p = {
    name: "rupesh",
    age: 28
}
let q = p;

p.name = "rahul";

// becuse q value also changed bec it copied reference not the value , so reeference of p was copied to q

console.log(p); //output rahul
console.log(q); // output rahul