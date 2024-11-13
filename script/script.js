"use strict";
console.clear();

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Call functions and get elements

printCards();
const form = document.querySelector("form");
form.addEventListener("submit", addMembers);

console.log(form);


// FUNCTIONS

// print cards

function printCards() {
  let template = "";

  for (let value of teamMembers) {

    template += `
                 <div class=" d-flex col-lg-4 col-md-6 col-sm-12">
                     <div class="img-container">
                         <img src="./${value.img}" alt="${value.name}">
                     </div>
                     <div class="w-100 ps-3 py-3 text-bg-dark">
                         <h4 class="text-uppercase">${value.name}</h4>
                         <h5>${value.role}</h5>
                         <div class="text-info">${value.email}</div>
                     </div>
                 </div>

            `
  }
  const mainContent = document.querySelector(".row");
  console.log(mainContent);
  mainContent.innerHTML = template;
}
console.dir(teamMembers);

// add members

function addMembers(event) {
  event.preventDefault();
  event.stopPropagation();
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let email = document.getElementById("email").value;
  let img = document.getElementById("img").value
  console.log(name, role, email, img);

  const newMember = {
    name,
    role,
    email,
    img
  };

  teamMembers.push(newMember);
  console.log(newMember);
  console.log(teamMembers);
  printCards();
}



















