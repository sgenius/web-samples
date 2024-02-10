function handleClick() {
    const num = Math.random();

    // Add a span tag, so that we create an HTML element.
    // Otherwise we cannot use removeChild()
    const output = `<span>Your number is ${num}</span>`;
    const elem = document.querySelector("#result");

    const childrenToDelete = elem.children;
    console.log(childrenToDelete);
    for (child of childrenToDelete) {
        elem.removeChild(child);
    }
    elem.insertAdjacentHTML("beforeend", output);
}