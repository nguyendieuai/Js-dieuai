class Human{
    species ='human';
} 

class Person extends Human {
    name = 'Dieu Ai';
    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
console.log(person.species);