// Ex 1
// const car = {
//     name: "Mercedes-Benz ",
//     generation: "first",
//     model: "C-Class",
//     door: "4",
//     color: "white",
//     automatic: "yes",
//     year: "2020",
//     carBrand: function() {
//         return this.name + this.model;
//     },
// };
// const animal = {
//     name: "Snowflake",
//     gender: "girl",
//     species: "Chow Chow",
//     food: "Blue Buffalo Lamb & Brown Rice",
//     color: "white",
//     weight: "30",
//     birthYear: "2021",
//     LifeExpectancy: "10",
//     animalType: function() {
//         return this.color + this.species;
//     },
// };
// const person = {
//     firstName: "Marry",
//     lastName: "Doe",
//     gender: "female",
//     birthYear: "2000",
//     job: "Web developer",
//     friends: ["sarah", "Suzy", "Maria"],
//     hasDriversLicence: true,
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
// };
// console.log(person.calcAge());
// document.getElementById("age").innerHTML = `<h2>${
//   person.firstName
// }, you are ${person.calcAge()} years old</h2>`;

// console.log(car.carBrand());
// document.getElementById(
//     "car"
// ).innerHTML = `<h3> Your car is ${car.carBrand()} </h3>`;

// console.log(animal.animalType());
// document.getElementById(
//     "animal"
// ).innerHTML = `<h4> You have a ${animal.animalType()} and her name is ${
//   animal.name
// }</h4>`;

// Ex 1
let theme = {
    car: [{
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
    }, ],
    animal: [{
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
    }, ],
    person: [{
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
    }, ],
};

let result = document.getElementById("theme");

result.innerHTML = `<h2> Your Information </h2>`;
for (i = 0; i < theme.car.length; i++) {
    result.innerHTML += `<div><h3>Your car: </h3>${theme.car[i].name}</div>
    <div><h3>Model: </h3>${theme.car[i].name}</div>
    <div><h3>Generation: </h3>${theme.car[i].generation} </div>`;
}

// Ex 2
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