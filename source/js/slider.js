var mainNav = document.querySelector(".main-nav");
var navtoggle = document.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

navtoggle.addEventListener("click", function(evt) {

  evt.preventDefault();

  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  }

  else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});

var toggleOne = document.querySelector(".example__slider-toggle--1");
var toggleTwo = document.querySelector(".example__slider-toggle--2");
var after = document.querySelector(".example__item--after");
var before = document.querySelector(".example__item--before");
var ind = document.querySelector(".example__slider");

toggleTwo.addEventListener("click", function(evt) {

  evt.preventDefault();

  before.classList.remove("image-active");
  after.classList.add("image-active");
  ind.classList.remove("example__slider--indicator");
  ind.classList.add("example__slider-indicator--two");
});

toggleOne.addEventListener("click", function(evt) {

  evt.preventDefault();

  before.classList.add("image-active");
  after.classList.remove("image-active");
  ind.classList.add("example__slider--indicator");
  ind.classList.remove("example__slider-indicator--two");
});
