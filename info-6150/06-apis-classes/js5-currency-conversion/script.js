/* Constants with capitalized names is a standard. */
const ACCESS_KEY = '7cad14dfe13ca68a34444894331e2c1a'; // insert your key here

async function init() {
   // First, get the references to the nodes we'll use
   const currencyFromNode = document.querySelector('#currencyFrom');
   const currencyToNode = document.querySelector('#currencyTo');
   
   try {
      const response = await fetch(`http://data.fixer.io/api/symbols?access_key=${ACCESS_KEY}`);
      const jsonData = await response.json();
      
      const symbols = jsonData.symbols;
      const symbolKeys = Object.keys(symbols);

      for (key of symbolKeys) {
         const value = symbols[key];
         const newOptionHTML = `<option value="${key}">${value}</option>`; 
         currencyFromNode.insertAdjacentHTML('beforeend', newOptionHTML);
         currencyToNode.insertAdjacentHTML('beforeend', newOptionHTML);
      }
   } catch (err) {
      window.alert(`Error getting data to build the form: ${err}`);
   }
}

async function clickHandler(event) {
   // prevent the form from reloading the page
   event.preventDefault();

   // Get node references
   const currencyFromNode = document.querySelector('#currencyFrom');
   const currencyToNode = document.querySelector('#currencyTo');
   const quantityNode = document.querySelector('#quantity');
   const resultNode = document.querySelector('#result');

   // Get values from the nodes
   const currencyFrom = currencyFromNode.value;
   const currencyTo = currencyToNode.value;

   // get value from the input; if it's Not a Number (NaN), force it to be 0.
   const quantityInput = Number.parseFloat(quantityNode.value);
   const quantity = Number.isNaN(quantityInput) ? 0 : quantityInput;

   // Compose the URL we will send
   // We can only use this endpoint in the free version, using euros
   const url = `http://data.fixer.io/api/latest?access_key=${ACCESS_KEY}&base=EUR&symbols=${currencyFrom},${currencyTo}`

   // try sending it and getting the result
   try {
      const response = await fetch(url);
      const json = await response.json();

      /* response format is as follows:
         {
            "success": true,
            "timestamp": 1519296206,
            "base": "USD",
            "date": "2023-12-18",
            "rates": {
               "GBP": 0.72007,
               "JPY": 107.346001,
               "EUR": 0.813399,
            }
         }
      */
      const { rates } = json; // this is the same as "const rates = json.rates"

      // get the rates for the currencies we want
      const fromRate = rates[currencyFrom]; // eg. if currencyFrom = GBP, this is rates.GBP
      const toRate = rates[currencyTo];

      // convert to euros first
      const valueInEuros = quantity / fromRate;

      // then convert to the target currency
      const result = valueInEuros * toRate;

      console.log({ fromRate, toRate })
      console.log({ quantity, valueInEuros, result })

      // output the value to the HTML
      resultNode.innerHTML = result;

   } catch (err) {
      window.alert(`Error converting: ${err}`);
   }
}