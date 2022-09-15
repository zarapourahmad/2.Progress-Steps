"use strict";

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".lines");

let i = 0;

function clickNext() {
  if (i <= 2) {
    i++;
    circles[i].classList.add("active");
    lines[i - 1].classList.add("activ");

    if (i === 3) {
      next.classList.remove("activ");
    }
    if (i >= 1) {
      prev.classList.add("activ");
    } else {
      prev.classList.remove("activ");
    }
  }
}

function clickPrev() {
  if (0 < i && i <= 3) {
    circles[i].classList.remove("active");
    lines[i - 1].classList.remove("activ");
    i--;
    next.classList.add("activ");
    if (i >= 1) {
      prev.classList.add("activ");
    } else {
      prev.classList.remove("activ");
    }
  }
}

next.addEventListener("click", clickNext);

prev.addEventListener("click", clickPrev);
