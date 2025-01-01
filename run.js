const num =[5, 10, 15, 20, 25];

function newNum(x)  {
  return x * 2;
}

const newNum = num.map(newNum);
console.log(newNum);