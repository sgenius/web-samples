const API_KEY = 'yC5cL36pS03qcaVLvqKsxVENi8SGmQFv';

function getInputs() {
    const quantityNode = document.querySelector('#quantity');
    const fromNode = document.querySelector('#from');
    const toNode = document.querySelector('#to');

    const quantity = quantityNode.value;
    const from = fromNode.value;
    const to = toNode.value;
    return { quantityNode, fromNode, toNode, quantity, from, to };
}

let rateEntries = [];

async function init() {
    console.log('Page loaded');
    const { fromNode } = getInputs();
    // get data from the api
    try {
        const response = await fetch(`https://api.currencybeacon.com/v1/latest?api_key=${API_KEY}`);
        if (response.status !== 200) {
            // this should be an error!
            throw(new Error('Backend had an error'))
        }
        const json = await response.json();
        console.log({json});

        const { rates } = json;
        rateEntries = Object.entries(rates);
        console.log(rateEntries);
        rateEntries.forEach((entry) => {
            const [ codeOfCurrency ] = entry;
            fromNode.insertAdjacentHTML('beforeend', `<option value=${codeOfCurrency}>${codeOfCurrency}</option>`);
        });
        
    } catch (err) {
        console.error('Something failed: ', err);
    };
}

async function handleSubmit(event) {
    event.preventDefault();

    const { quantity, from, to } = getInputs();

    console.log({ quantity, from, to });
    
    const response = await fetch(`https://api.currencybeacon.com/v1/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${quantity}`);
    const json = await response.json();
    console.log(json);
    window.alert(json.response.value);

    // console.log(rateEntries);
    
}