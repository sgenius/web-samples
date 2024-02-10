/* Constants with capitalized names is a standard. */
const ACCESS_KEY = '7cad14dfe13ca68a34444894331e2c1a'; // insert your key here

function init() {
    fetch(`http://data.fixer.io/api/symbols?access_key=${ACCESS_KEY}`)
      .then((response) => {
         response.json()
            .then((jsonData) => {
               console.log('jsonData: ', jsonData);
            });
      }).catch((err) => {
         console.error(err);
         window.alert(`Error loading symbols: ${err}`)
      });
}