'use strict';
function increaseBy10Percent(arr) 
{
    for (let i = 0; i < arr.length; i++) 
        {
        arr[i] *= 1.1;
    }
    return arr;
}
const arr = [10, 20, 30];
const increasedNumbers = increaseBy10Percent(arr);
console.log(increasedNumbers);