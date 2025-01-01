// maps only works with arrays 


const numbers = [5, 10, 15, 20, 25];

const timesTen = numbers.map((number) => {
  return number * 10;
});

console.log(timesTen);
console.log(numbers);


// __________ self description________________

const num =[5, 10, 15, 20, 25];

function newNum(x)  {
  return x * 2;
}

 const result = num.map(newNum);
console.log(newNum);
