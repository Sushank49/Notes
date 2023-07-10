"use strict";

const signIn = document.querySelector(".sign-in");
let login = document.querySelector(".login");
const signUp = document.querySelector(".sign-up");
const signup_div = document.querySelector(".signup-div");
const body = document.querySelector(".main");
const close = document.querySelector(".close");

signIn.addEventListener("click", function (e) {
  e.preventDefault;
  login.style.opacity = 1;
  login.style.display = "block";
  body.style.filter = "blur(2rem)";
});

signUp.addEventListener("click", function (e) {
  e.preventDefault;
  signup_div.style.opacity = 1;
  signup_div.style.display = "block";
  login.style.opacity = 0;
  login.style.display = "none";
});
