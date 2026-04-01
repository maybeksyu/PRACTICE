'use strict';
function repeatOperation(operation, interval, times)
{
    let counter = 0;
    const intervalId = setInterval(() => 
        {
        operation();
        counter++;
        if (counter >= times) 
            {
            clearInterval(intervalId);
            }
        }, interval);
}
repeatOperation(
    function() { console.log("Function Declaration: операция выполнена"); },
    1000,
    7
);