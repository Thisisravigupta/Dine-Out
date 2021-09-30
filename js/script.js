let span = document.querySelector("span");
span.addEventListener("click", () => {
  openNav();
  openActive();
});

function openNav() {
  let nav = document.querySelector("ul");
  nav.classList.toggle("open");
}
function closeNav() {
  let nav = document.querySelector("ul");
  nav.classList.remove("open");
  span.classList.remove("active");
}
function openActive() {
  span.classList.toggle("active");
}

document.onclick = function (e) {
  if (
    e.target.id == "home" ||
    e.target.id == "about" ||
    e.target.id == "our-menu" ||
    e.target.id == "testimonials" ||
    e.target.id == "team" ||
    e.target.id == "contact-us"
  ) {
    closeNav();
  }
};


// ----------ourMenu-tabs-------
const lunch = document.querySelector("#lunch");
const lunchItem = document.querySelector(".lunch");
lunch.addEventListener("click", () => {
  openlunch();
  closedinner();
  closedrinks();
  closedesserts();
});
function openlunch() {
  lunchItem.classList.add("active");
  lunch.classList.add("active");
}
function closelunch() {
  lunchItem.classList.remove("active");
  lunch.classList.remove("active");
}

const dinner = document.querySelector("#dinner");
const dinnerItem = document.querySelector(".dinner");
dinner.addEventListener("click", () => {
  opendinner();
  closelunch();
  closedrinks();
  closedesserts();
});
function opendinner() {
  dinnerItem.classList.add("active");
  dinner.classList.add("active");
}
function closedinner() {
  dinnerItem.classList.remove("active");
  dinner.classList.remove("active");
}

const drinks = document.querySelector("#drinks");
const drinksItem = document.querySelector(".drinks");
drinks.addEventListener("click", () => {
  opendrinks();
  closelunch();
  closedinner();
  closedesserts();
});
function opendrinks() {
  drinksItem.classList.add("active");
  drinks.classList.add("active");
}
function closedrinks() {
  drinksItem.classList.remove("active");
  drinks.classList.remove("active");
}

const desserts = document.querySelector("#desserts");
const dessertsItem = document.querySelector(".desserts");
desserts.addEventListener("click", () => {
  opendesserts();
  closedrinks();
  closelunch();
  closedinner();
});
function opendesserts() {
  dessertsItem.classList.add("active");
  desserts.classList.add("active");
}
function closedesserts() {
  dessertsItem.classList.remove("active");
  desserts.classList.remove("active");
}
