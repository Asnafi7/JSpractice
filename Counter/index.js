const decreaseBtn = document.getElementById("btn-decrement");
const resetBtn = document.getElementById("btn-reset");
const increaseBtn = document.getElementById("btn-increment");
const number = document.getElementById("number");

let counter = 0;

decreaseBtn.onclick = function () {
  counter--;
  number.textContent = counter;
};

increaseBtn.onclick = () => {
  counter++;
  number.textContent = counter;
};

resetBtn.onclick = function () {
  counter = 0;
  number.textContent = counter;
};

//cara lain untuk menangkap event

// decreaseBtn.addEventListener("click", () => {
//   counter--;
//   number.textContent = counter;
// });

// increaseBtn.addEventListener("click", () => {
//   counter++;
//   number.textContent = counter;
// });

// resetBtn.addEventListener("click", () => {
//   counter = 0;
//   number.textContent = counter;
// });
