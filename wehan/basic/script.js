var car = new Object();

car.Model = "Mercedes";
car.Brand = "Benz";
car.Age = 1;
car.Automatic = true ;
car.location = ["frankfurt", "berlin", "mainz"];
car.fullcar = function() {
   return this.Name +' '+ this.Brand;
};


var animal = new Object();

animal.Nick = "Harry";
animal.Race = "Labrador";
animal.Age = 3;
animal.Aggressive = true ;
animal.hobbies = ["eat", "sleep", "pee"];
animal.fullanimal = function() {
   return this.Name +' '+ this.Race;
};

var person = new Object();

person.firstName = "wehan";
person.lastName = "chen";
person.age = 99;
person.drivingLicense = true ;
person.hobbies = ["sleep", "eat", "coding"];
person.fullName = function() {
   return this.firstName +' '+ this.lastName;
};

console.log(person.fullName());
// console.log(animal.fullanimal());
// console.log(car.fullcar());

document.getElementById("firstName").innerHTML= person.firstName;
document.getElementById("age").innerHTML=person.age;
document.getElementById("hobbies").innerHTML=person.hobbies;

// var sandwiches = new Object();
// food1.kind = "hamburger";
// food1.calories = 260;

// var fries = new Object();
// food2.kind = "Large French Fries";
// food2.calories = 570;

// document.getElementById("sandwich").innerHTML=food1.kind;

// document.getElementById("sandwich").innerHTML=food1.calories;

var sandwiches =  `[{ "sandwich": "hamburger", "calories": "260" }]`;
var fries = `[{ "fries_size": "Large French Fries", "calories": "570" }]`;

var sandwiches= JSON.parse(sandwiches)
console.log(sandwiches)
var fries= JSON.parse(fries)
console.log(fries)
document.getElementById("sandwich").innerHTML +="My favorite " +sandwiches[0].sandwich+ " is a " +sandwiches[0].calories +" which has approximately"+sandwiches[0].sandwich + ",along with it i enjoy eating "+fries[0].fries_size+" which has about "+fries[0].calories;


