'use strict';
function performAsync(asyncOperations) 
{
  return asyncOperations.reduce((promiseChain, operation) => 
    {
    return promiseChain.then(operation);
    }, 
    Promise.resolve());
}

function asyncOperation1() {
  return new Promise((resolve) => 
    {
    setTimeout(() => {
      console.log("Операция 1 завершена");
      resolve("Результат операции 1");
    }, 1000);
  });
}

function asyncOperation2(dataFromOp1) {
  return new Promise((resolve) => {
    setTimeout(() => 
        {
      console.log("Операция 2 завершена. Получен:", dataFromOp1);
      resolve("Результат операции 2");
    }, 500);
  });
}

function asyncOperation3(dataFromOp2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Операция 3 завершена. Получен:", dataFromOp2);
      resolve("Финальный результат");
    }, 750);
  });
}


const operations = [asyncOperation1, asyncOperation2, asyncOperation3];

performAsync(operations)
  .then((finalResult) => {
    console.log("Все операции завершены. Финальный результат:", finalResult);
  })
  .catch((error) => {
    console.error("AПроизошла ошибка:", error);
  });
