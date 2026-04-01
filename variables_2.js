'use strict';
function testBlockScope() {
    var xvarOutside = 'var вне блока';
    let xletOutside = 'let вне блока';
    const xconstOutside = 'const вне блока';
    {
    var xvarInside = 'var внутри блока';
    let xletInside = 'let внутри блока';
    const xconstInside = 'const внутри блока';
    console.log(xvarInside);    
    console.log(xletInside);
    console.log(xconstInside);
    }
console.log(xvarOutside);
console.log(xletOutside);
console.log(xconstOutside);
console.log(xvarInside);
console.log(xletInside);
console.log(xconstInside);
}
testBlockScope();
console.log(xvarOutside);
console.log(xletOutside);
console.log(xconstOutside);  
console.log(xvarInside);   