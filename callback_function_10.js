'use strict';
function delayCallback(callback) 
{
  setTimeout(callback, 2000);
}
delayCallback(() => 
    {
        console.log('Cообщение появилось через 2 секунды');
    });