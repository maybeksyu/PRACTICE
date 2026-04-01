'use strict';
function areObjectsEqual(obj1, obj2) 
{//проверка на неопределенные значения
    if (obj1 === obj2) return true;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1)
    {
        if (!(key in obj2)) 
        {
            return false;
        }  
        if (!areObjectsEqual(obj1[key], obj2[key])) 
        {
            return false;
        }
    }
    return true;
}
const book1 = {name: "Джейн Эйр", year: 1847, author: { name: "Шарлотта Бронте" } };
const book2 = {name: "Джейн Эйр", year: 1847, author: { name: "Шарлотта Бронте" } };
const book3 = {name: "Грозовой перевал", year: 1847 };
console.log(areObjectsEqual(book1, book2));
console.log(areObjectsEqual(book1, book3));
