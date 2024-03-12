const txtInput = document.getElementById("txtInput");
const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");

let temp = 0;

function convert() {
  if (celcius.checked) {
    temp = Number(txtInput.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1);
  } else if (fahrenheit.checked) {
    temp = Number(txtInput.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1);
  } else {
    result.textContent = "Pilih Convert";
  }
}
