// let input = document.getElementById("input");
// let buttons = document.querySelectorAll("button"); // No .value here

// let arr = Array.from(buttons);
// let string = "";

// arr.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "DEL") {
//       string = string.substring(0, string.length - 1);
//       input.value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = "";
//       input.value = string;
//     } else if (e.target.innerHTML == "=") {
//       string = eval(string);
//       input.value = string;
//     } else {
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   });
// });

let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
