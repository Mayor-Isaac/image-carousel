"use strict";
//Hint
//Critically Examine the mark up and the CSS
//Select the left and right buttons
//Select element with id of imgs
//select all the images
//crate a function to change image on button click
//you may need to learn about about the setInterval method
//you will need to transform the images offscreen to implement sliding effect
//Goodluck😎

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const imgContainer = document.getElementById("imgs");
const firstImg = document.querySelector(".slide--1");
const secondImg = document.querySelector(".slide--2");
const thirdImg = document.querySelector(".slide--3");
const fourthImg = document.querySelector(".slide--4");
const firstDot = document.querySelector(".dot--1");
const secondDot = document.querySelector(".dot--2");
const thirdDot = document.querySelector(".dot--3");
const fourthDot = document.querySelector(".dot--4");

const changeToNextImg = function () {
  rightBtn.addEventListener("click", function () {
    if (!firstImg.classList.contains("hidden")) {
      //show 2nd Slide from 1st Slide
      firstImg.classList.add("hidden");
      firstDot.classList.remove("active");
      secondDot.classList.add("active");
    } else if (
      firstImg.classList.contains("hidden") &&
      !secondImg.classList.contains("hidden")
    ) {
      //show 3rd Slide from 2nd Slide
      secondImg.classList.add("hidden");
      secondDot.classList.remove("active");
      thirdDot.classList.add("active");
    } else if (
      secondImg.classList.contains("hidden") &&
      !thirdImg.classList.contains("hidden")
    ) {
      //show 4th Slide from 3rd Slide
      thirdImg.classList.add("hidden");
      fourthDot.classList.add("active");
      thirdDot.classList.remove("active");
    } else if (
      thirdImg.classList.contains("hidden") &&
      !fourthImg.classList.contains("hidden")
    ) {
      //show 1st Slide from 4th Slide
      firstImg.classList.remove("hidden");
      secondImg.classList.remove("hidden");
      thirdImg.classList.remove("hidden");
      fourthImg.classList.remove("hidden");
      fourthDot.classList.remove("active");
      firstDot.classList.add("active");
    }
  });
};
changeToNextImg();
const changeToPrevImg = function () {
  leftBtn.addEventListener("click", function () {
    if (!firstImg.classList.contains("hidden")) {
      //show 4th Slide from 1st Slide
      firstImg.classList.add("hidden");
      secondImg.classList.add("hidden");
      thirdImg.classList.add("hidden");
      fourthDot.classList.add("active");
      firstDot.classList.remove("active");
    } else if (
      //show 2nd Slide from 3rd Slide
      secondImg.classList.contains("hidden") &&
      !thirdImg.classList.contains("hidden")
    ) {
      secondImg.classList.remove("hidden");
      secondDot.classList.add("active");
      thirdDot.classList.remove("active");
    } else if (
      //show 1st Slide from 2nd Slide
      firstImg.classList.contains("hidden") &&
      !secondImg.classList.contains("hidden")
    ) {
      firstImg.classList.remove("hidden");
      secondDot.classList.remove("active");
      firstDot.classList.add("active");
    } else if (
      //show 3rd Slide from 4th Slide
      firstImg.classList.contains("hidden") &&
      !fourthImg.classList.contains("hidden")
    ) {
      thirdImg.classList.remove("hidden");
      fourthDot.classList.remove("active");
      thirdDot.classList.add("active");
    }
  });
};
changeToPrevImg();
firstDot.addEventListener("click", function () {
  firstImg.classList.remove("hidden");
  secondImg.classList.remove("hidden");
  thirdImg.classList.remove("hidden");
  fourthImg.classList.remove("hidden");
  firstDot.classList.add("active");
  secondDot.classList.remove("active");
  thirdDot.classList.remove("active");
  fourthDot.classList.remove("active");
});
secondDot.addEventListener("click", function () {
  firstImg.classList.add("hidden");
  secondImg.classList.remove("hidden");
  thirdImg.classList.add("hidden");
  fourthImg.classList.add("hidden");
  secondDot.classList.add("active");
  firstDot.classList.remove("active");
  thirdDot.classList.remove("active");
  fourthDot.classList.remove("active");
});
thirdDot.addEventListener("click", function () {
  firstImg.classList.add("hidden");
  thirdImg.classList.remove("hidden");
  secondImg.classList.add("hidden");
  fourthImg.classList.add("hidden");
  thirdDot.classList.add("active");
  firstDot.classList.remove("active");
  secondDot.classList.remove("active");
  fourthDot.classList.remove("active");
});
fourthDot.addEventListener("click", function () {
  firstImg.classList.add("hidden");
  thirdImg.classList.add("hidden");
  secondImg.classList.add("hidden");
  fourthImg.classList.remove("hidden");
  fourthDot.classList.add("active");
  firstDot.classList.remove("active");
  secondDot.classList.remove("active");
  thirdDot.classList.remove("active");
});
