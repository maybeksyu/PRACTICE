'use strict';
function validateInteger(number)
{
    try 
    {
        if (!Number.isInteger(number)) 
        {
            throw new Error("Ошибка: число должно быть целым!");
        }
        console.log(`Число ${number} является целым.`);
    } catch (error) 
    {
        console.error(error.message);
    } finally 
    {
        console.log("Проверка завершена");
    }
}
validateInteger(7);
validateInteger(3.14);//дробь
validateInteger("10");//строка
validateInteger(-1);