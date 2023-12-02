"use strict";

const signIn = document.querySelector(".sign-in");
const login = document.querySelector(".login");
const signUp = document.querySelector(".sign-up");
const signup_div = document.querySelector(".signup-div");

signIn.addEventListener("click", function (e) {
  e.preventDefault;
  login.style.opacity = 1;
  login.style.display = "block";
  signup_div.style.opacity = 0;
  signup_div.style.display = "none";
});
signUp.addEventListener("click", function (e) {
  e.preventDefault;
  signup_div.style.opacity = 1;
  signup_div.style.display = "block";
  login.style.opacity = 0;
  login.style.display = "none";
});
prevNotes.addEventListener("click", function (e) {
  e.preventDefault;
  signup_div.style.opacity = 1;
  signup_div.style.display = "block";
  login.style.opacity = 0;
  login.style.display = "none";
});
