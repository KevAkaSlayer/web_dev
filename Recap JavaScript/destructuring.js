const numbers = [42,45];

const x = numbers[0];
const y = numbers[1];

// console.log(x,y);


const [a,b] = numbers;
// console.log(a,b);


function boxify(x,y)  {
    const nums = [x,y];
    return nums;
}

console.log(boxify(50,78));