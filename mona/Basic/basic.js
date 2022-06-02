// Ex 1
const car = {
    name: "Mercedes-Benz ",
    generation: "first",
    model: "C-Class",
    door: "4",
    color: "white",
    automatic: "yes",
    year: "2020",
    carBrand: function() {
        return this.name + this.model;
    },
};
const animal = {
    name: "Snowflake",
    gender: "girl",
    species: "Chow Chow",
    food: "Blue Buffalo Lamb & Brown Rice",
    color: "white",
    weight: "30",
    birthYear: "2021",
    LifeExpectancy: "10",
    animalType: function() {
        return this.color + this.species;
    },
};
const person = {
    firstName: "Marry",
    lastName: "Doe",
    gender: "female",
    birthYear: "2000",
    job: "Web developer",
    friends: ["sarah", "Suzy", "Maria"],
    hasDriversLicence: true,
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
};
console.log(person.calcAge());
document.getElementById("age").innerHTML = `<h2>${
  person.firstName
}, you are ${person.calcAge()} years old</h2>`;

console.log(car.carBrand());
document.getElementById(
    "car"
).innerHTML = `<h3> Your car is ${car.carBrand()} </h3>`;

console.log(animal.animalType());
document.getElementById(
    "animal"
).innerHTML = `<h4> You have a ${animal.animalType()} and her name is ${
  animal.name
}</h4>`;

// Ex 2
// My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories.
var sandwiches = `[{ 
    "sandwich": "hamburger",
     "calories": "260" 
    }]`;
var fries = `[{ 
    "fries_size": "Large French Fries", 
    "calories": "570" }]`;

const mySandwich = JSON.parse(sandwiches);
const myFries = JSON.parse(fries);
console.log(mySandwich);
document.getElementById(
    "sandwich"
).innerHTML = `<h4> My favorite sandwich is a ${mySandwich[0].sandwich} which has approximately ${mySandwich[0].calories} calories, along with it I enjoy eating ${myFries[0].fries_size} which have about ${myFries[0].calories} calories.</h4>`;