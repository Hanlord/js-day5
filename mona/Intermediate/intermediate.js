console.log("works");
var firstName = "Marry";

const usersList = JSON.parse(employees);

//const listEmployees = document.querySelector(".container-employees");
const listEmployees = document.querySelector(".smo");

//printCards = () => {
//    listEmployees.innerHTML = "";
//    usersList.forEach((employees) => {
//        listEmployees.innerHTML += ` <div class="col-4">
//      <div class="card" style="width: 18rem">
//        <img src="${employees.image}" class="card-img-top" alt="..." />
//        <div class="card-body">
//          <h5 class="card-title">${employees.firstName}</h5>
//        </div>
//      </div>
//    </div>`;
//    });
//};

printCards = () => {
    listEmployees.innerHTML = "";
    usersList.forEach((employees) => {
        listEmployees.innerHTML += ` 
        <tr>
            <th scope="row">${employees.firstName}</th>
            <td>${employees.firstName}</td>
            <td>${employees.lastName}</td>
            <td>${employees.jobTitle}</td>
        </tr>
        `;
    });
};

localStorage.setItem("name", "Marry Doe");
let newName = localStorage.getItem("name");
localStorage.removeItem("name");
console.log(newName);

localStorage.setItem("users", JSON.stringify(usersList));
const usersString = localStorage.getItem("users");
console.log(JSON.parse(usersString));

printCards();
increaseLikes();