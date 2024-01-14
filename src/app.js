/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My cat", "An alien", "A bird", "Someone"];
  let action = ["ate", "crushed", "stole", "broke", "vanished"];
  let what = ["my homework", "the keys", "the book", "the car", "my money"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was having a shower"
  ];

  let creativeExcuse =
    who[Math.floor(Math.random() * 5)] +
    " " +
    action[Math.floor(Math.random() * 5)] +
    " " +
    what[Math.floor(Math.random() * 5)] +
    " " +
    when[Math.floor(Math.random() * 5)];
  return creativeExcuse;
};
