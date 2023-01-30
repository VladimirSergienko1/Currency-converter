const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const currencyThree = document.getElementById("currency-three");
const currencyFour = document.getElementById("currency-four");
const currencyFive = document.getElementById("currency-five");
const currencySix = document.getElementById("currency-six");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const amountThree = document.getElementById("amount-three");
const amountFour = document.getElementById("amount-four");
const amountFive = document.getElementById("amount-five");
const amountSix = document.getElementById("amount-six");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;
  const currency_three = currencyThree.value;
  const currency_four = currencyFour.value;
  const currency_five = currencyFive.value;
  const currency_six = currencySix.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/654f86fc96bde117e54967c5/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate1 = data.conversion_rates[currency_two];
      const rate2 = data.conversion_rates[currency_three];
      const rate3 = data.conversion_rates[currency_four];
      const rate4 = data.conversion_rates[currency_five];
      const rate5 = data.conversion_rates[currency_six];

    

      amountTwo.value = (amountOne.value * rate1).toFixed(2);
      amountThree.value = (amountOne.value * rate2).toFixed(2);
      amountFour.value = (amountOne.value * rate3).toFixed(2);
      amountFive.value = (amountOne.value * rate4).toFixed(2);
      amountSix.value = (amountOne.value * rate5).toFixed(2);
      console.log(data);
    });
}

// Event listener
currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);
currencyThree.addEventListener("change", calculate);
amountThree.addEventListener("input", calculate);
currencyFour.addEventListener("change", calculate);
amountFour.addEventListener("input", calculate);
currencyFive.addEventListener("change", calculate);
amountFive.addEventListener("input", calculate);
currencySix.addEventListener("change", calculate);
amountSix.addEventListener("input", calculate);

calculate();
