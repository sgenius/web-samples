function handleClick(event) {
    event.preventDefault(); // avoids the form to actually be submitted
    const errorNode = document.querySelector("#errormsg");
    errorNode.innerHTML = "";

    const resultNode = document.querySelector("#result");
    resultNode.innerHTML = "";

    const numeratorNode = document.querySelector("#numerator");
    const numeratorValue = Number.parseFloat(numeratorNode.value);

    const denominatorNode = document.querySelector("#denominator");
    const denominatorValue = Number.parseFloat(denominatorNode.value);

    // If the inputs are invalid...
    if (numeratorValue === 0 && denominatorValue === 0) {
        errorNode.innerHTML = "Numerator and denominator cannot be both zero";
        return;
    }
    // At this point we know the inputs are valid
    const result = numeratorValue / denominatorValue;

    resultNode.innerHTML = `<span>The result is ${result}</span>`;
}
