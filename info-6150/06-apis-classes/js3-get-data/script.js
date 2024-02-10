/* Constants with capitalized names is a standard. */
const ACCESS_KEY = '7cad14dfe13ca68a34444894331e2c1a'; // insert your key here

function init() {
    fetch(`http://data.fixer.io/api/symbols?access_key=${ACCESS_KEY}`)
      .then((response) => {
         response.json()
            .then((jsonData) => {
               console.log('jsonData: ', jsonData);
               /* Get the <select> node. */
               const selectNode = document.querySelector('#currencies');
               
               const symbols = jsonData.symbols;
               const symbolKeys = Object.keys(symbols); /* ["AED", "AFN", "ALL"...] */
               for (key of symbolKeys) {
                  const value = symbols[key]; /* if key is "AED", value is "United Arab Emirates Dirham" */
                  selectNode.insertAdjacentHTML('beforeend', `<option value="${key}">${value}</option>`);
               }

            }).catch((err) => {
               window.alert(`Error converting data to JSON: ${err}`);
            });
      }).catch((err) => {
         console.error(err);
         window.alert(`Error loading symbols: ${err}`)
      });
}