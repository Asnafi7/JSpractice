const myBtn = document.getElementById("myBtn");
const myCheckBox = document.getElementById("myCheckBox");
const gopay = document.getElementById("gopay");
const dana = document.getElementById("dana");
const gpay = document.getElementById("gpay");
const subscribeResult = document.getElementById("subscribeResult");
const paymentResult = document.getElementById("paymentResult");

myBtn.onclick = function () {
  if (myCheckBox.checked) {
    if (gopay.checked) {
      subscribeResult.textContent = `Kamu berlangganan`;
      paymentResult.textContent = `Kamu membayar menggunakan GoPay`;
    } else if (dana.checked) {
      subscribeResult.textContent = `Kamu berlangganan`;
      paymentResult.textContent = `Kamu membayar menggunakan Dana`;
    } else if (gpay.checked) {
      subscribeResult.textContent = `Kamu berlangganan`;
      paymentResult.textContent = `Kamu membayar menggunakan Goggle Pay`;
    } else {
      paymentResult.textContent = `Kamu belum memilih metode pembayaran`;
    }
  } else {
    subscribeResult.textContent = `Kamu belum memilih langganan`;
  }
};
