const currencyEl1 = document.getElementById('currency-first');
const currencyEl2 = document.getElementById('currency-second');
const amountEl1 = document.getElementById('amount-first');
const amountEl2 = document.getElementById('amount-second');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');



//Fetch the rates and update the DOM
function calculate() {
    const currency1 = currencyEl1.value;
    const currency2 = currencyEl2.value;
    fetch(`https://v6.exchangerate-api.com/v6/d21d3e2e0836b32a3cdf50de/latest/${currency1}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currency2];
        rateEl.innerHTML = `1 ${currency1} = ${rate} ${currency2}`;
        amountEl2.value = (amountEl2.value * rate).toFixed(2);
    });
}



//Event Listeners
currencyEl1.addEventListener('change', calculate);
amountEl1.addEventListener('input', calculate);
currencyEl2.addEventListener('change', calculate);
amountEl2.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEl1.value;
    currencyEl1.value = currencyEl2.value;
    currencyEl2.value = temp;
    calculate();
});

calculate();