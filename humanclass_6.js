'use strict';
class Person 
{
    constructor(name, age, country) 
    {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getInfo() 
    {
        return `Меня зовут ${this.name}, мне ${this.age} лет и я из ${this.country}.`;
    }
}

const person1 = new Person("Сергей", 35, "России");
const person2 = new Person("Варвара", 37, "Беларуси");

console.log(person1.getInfo());
console.log(person2.getInfo());