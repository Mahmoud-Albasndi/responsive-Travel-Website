// header backgroiund class Toggler
let nav = document.getElementById("nav__bar");
let navToggler = document.getElementById("nav__toggler");

navToggler.addEventListener("click", function () {
  nav.classList.toggle("bg-light");
});

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// Testmoinail function

let card = Array.from(document.querySelectorAll(".card-top .box"));

let count = 1;

let cuurentcard = card.length;

let nextbutton = document.getElementById("nextbtn");
let prevbutton = document.getElementById("prevbtn");

nextbutton.onclick = nextbtn;
prevbutton.onclick = prevbtn;
// crate pagintion ul
let pagintionUl = document.createElement("ul");
// set attribute id
pagintionUl.setAttribute("id", "paginton-ul");
pagintionUl.className = "list-unstyled fs-1 d-flex pt-5";

// loop pagintion
for (let i = 1; i <= cuurentcard; i++) {
  let pagintionitem = document.createElement("li");
  /// style pagintion in page
  pagintionitem.setAttribute("data-index", i);
  pagintionitem.style.cssText = "width:1rem; height:1rem; cursor: pointer;";
  pagintionitem.className = "border border-dark rounded-circle ms-5 ";
  // check of index element
  if (i <= 1) {
    pagintionitem.classList.remove("ms-5");
  }
  pagintionUl.appendChild(pagintionitem);
}
// append pageintion all element in page
document.getElementById("indicators").appendChild(pagintionUl);

// get the created ul
let pagintionCreatUl = document.getElementById("paginton-ul");

// Array from ul
let pageintionArray = Array.from(document.querySelectorAll("#paginton-ul li"));

// loop through all bulits item
for (let i = 0; i < pageintionArray.length; i++) {
  pageintionArray[i].onclick = function () {
    count = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

// Trigger the checker Function
checker();
// next functon
function nextbtn() {
  if (count == cuurentcard) {
    return 0;
  } else {
    count++;
    checker();
  }
}

// prev functon
function prevbtn() {
  if (count == 1) {
    return 0;
  } else {
    count--;
    checker();
  }
}

// the main function checker
function checker() {
  removeactiveclass();
  card[count - 1].classList.add("active");
  pagintionCreatUl.children[count - 1].classList.add("active");
}

// loop romve all box in card
function removeactiveclass() {
  card.forEach((e) => {
    e.classList.remove("active");
  });
  pageintionArray.forEach((l) => {
    l.classList.remove("active");
  });
}
