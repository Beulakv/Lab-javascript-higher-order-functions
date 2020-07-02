//  Function #1: Array Slice

const modifiedFood=["pizza","burger","fingerChips","donut","springRoll"];

console.log(modifiedFood.slice(1,4));

// Function #2: Array Splice

modifiedFood.splice(2,0,"noodles","icecream");

console.log(modifiedFood);

// Function #3: Filter

const arr=[12,324,213,4,2,3,45,4234];

let isEven=arr.filter(function(num)
{
    return num%2==0;

});

console.log(isEven);

function isprime(num)
{
    var flag = true;
    for(let i = 2; i <= num/2; i++)
    {
        if(num%i == 0)
        {
            flag = false;
            console.log(flag);
            return flag;
        }
    }
    return flag;
}
let prime=arr.filter(function(num)
{
return isprime(num)==true;
});

// Function #4: Reject

let nonPrime=arr.filter(function(num)
{
    return isprime(num)==false;
});

// Function #5: Lambda

let evenNumbers=arr.filter(num => num % 2 == 0);

console.log(evenNumbers);

// Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];

let findSquareOfNumbers=myArray.map(function(item) {
    return item*item;
});

console.log(findSquareOfNumbers);

// Function #7: Reduce

const myArray1=[2, 3, 5, 10];

let multiply=myArray1.reduce(function(acc,init)
{
  return acc*init;  
},1);

console.log(multiply);