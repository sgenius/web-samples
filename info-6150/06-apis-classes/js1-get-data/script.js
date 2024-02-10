/* Constants with capitalized names is a standard. */
const ACCESS_KEY = '7cad14dfe13ca68a34444894331e2c1a'; // insert your key here

function init() {
    console.log('Start of init()');
    const defaultSymbols = ['USD', 'EUR'];
    /* fetch returns a "promise": an object that represents an asynchronous operation (async).
       An async operation is one that will get done at a later moment, probably after the rest
       of the program finishes working. */
    const fetchPromise = fetch(`http://data.fixer.io/api/symbols?access_key=${ACCESS_KEY}`);
    /* in the meantime, we can do other stuff; no need to wait. */
    /* For example, we can display default data already; it can get displayed
       while we wait from the "actual" results from the server. */
    console.log(`symbols: ${defaultSymbols}`);
    console.log("loading");

    /* When this async operation finishes successfully, it's said that the promise "resolves".
       We call <promise>.then() to define what will happen when the promise resolves succesfully.

       The parameter of promise.then() has to be another function, and the function has to have
       certain parameters.
       
       Functions like fetchSuccess here, which are sent as parameters to other functions,
       so that they will be run at a later time, are called "callbacks". They are called like that
       because we will "call them back". (Remember: running a function is also called "calling" a function.) */
    fetchPromise.then(fetchSuccess);
    console.log('End of init()');
}

/* This is the function that <promise>.then() will call back.

   The callback of <a fetch promise>.then() has to have one parameter: this will contain the response
   that we just got from the server. */
function fetchSuccess(response) {
    console.log('Start of fetchSuccess()');
    /* fetch() does not know what kind of data we got. We need to tell it how to read it.
       <response>.json() is a method that will read the response as JSON data.
       It also returns a promise. */
    const readPromise = response.json();

    readPromise.then(readSuccess);
    console.log('End of fetchSuccess()');
}

/* Callback for <response>.json.
   It receives the data from the response, already converted into JSON.
   A JSON object is practically a Javascript object, so we can use it as such. */
function readSuccess(jsonData) {
    console.log('Start of readSuccess()');
    console.log('jsonData: ', jsonData);
    console.log('end of readSuccess');
}