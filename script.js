const like = document.getElementById("like");
const next = document.getElementById("next");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const content = document.getElementById("content");
const tinder = document.getElementById("tinder");

async function getData() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const img = document.createElement("img");
  const name = document.createElement("h3");
  const age = document.createElement("p");
  const number = document.createElement("p");
  console.log(data);

  tinder.innerText = "Tinder";
  container.innerHTML = "";

  container.appendChild(img);
  container.appendChild(name);
  container.appendChild(age);
  container.appendChild(number);

  img.src = data.results[0].picture.large;

  name.innerText =
    data.results[0].name.title +
    " " +
    data.results[0].name.first +
    " " +
    data.results[0].name.last;

  age.innerText = data.results[0].dob.age;
  number.innerText = data.results[0].cell;

  if (
    data.results[0].name.title === "Ms" ||
    data.results[0].name.title === "Miss" ||
    data.results[0].name.title === "Mrs" ||
    data.results[0].name.title === "Mademoiselle"
  ) {
    content.style.backgroundColor = "pink";
  } else {
    content.style.backgroundColor = "#0D4F8B";
  }

  like.addEventListener("click", function () {
    tinder.innerText = "You are in love!";
  });
}

next.addEventListener("click", getData);
