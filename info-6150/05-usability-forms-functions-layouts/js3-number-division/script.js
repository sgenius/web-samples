function handleClick(event) {
    event.preventDefault(); // avoids the form to actually be submitted
    resetNode("#errormsg");
    resetNode("#result");

    // we still need resultNode later on, so we don't delete it here
    const resultNode = document.querySelector("#result");

    const numeratorNode = document.querySelector("#numerator");
    const numeratorValue = Number.parseFloat(numeratorNode.value);

    const denominatorNode = document.querySelector("#denominator");
    const denominatorValue = Number.parseFloat(denominatorNode.value);

    // If the inputs are invalid...
    if (zeroOverZeroIsInvalid(numeratorValue, denominatorValue)) {
        errorNode.innerHTML = "Numerator and denominator cannot be both zero";
        return;
    }

    // At this point we know the inputs are valid
    const result = numeratorValue / denominatorValue;

    resultNode.innerHTML = `<span>The result is ${result}</span>`;
}

/**
 * Validates the "zero over zero" case. If both numerator and denominator
 * are zero, returns true.
 * @param {number} numerator 
 * @param {number} denominator
 * @returns {boolean} true if both are zero
 */
function zeroOverZeroIsInvalid(numerator, denominator) {
    if (numerator === 0 && denominator === 0) {
        return true;
    } 
}

/**
 * Selects an HTML node and if it exists, clears its contents.
 * @param {string} nodeName - a node identifier to use with querySelector
 */
function resetNode(nodeName) {
    const node = document.querySelector(nodeName);
    let flag = false;
    if (node !== null) {
        flag = true;
        node.innerHTML = "";
    }
    if (flag) {
        console.log("We deleted a node");
    } else {
        console.log("We did not delete a node");
    }
}