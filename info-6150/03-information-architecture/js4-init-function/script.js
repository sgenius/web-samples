function init() {
    const username = "Fernando";
    
    // a simpler way:
    document.querySelector("#")

    // create a new tag node
    const newParagraph = document.createElement('p');

    // create a new text node; this represents the text that goes inside the tag
    const newContent = document.createTextNode(`Hi, ${username}!`);

    // with this, the text is attached to the new "p"
    newParagraph.appendChild(newContent);

    // insert the node into the DOM tree:
    // 1. get a reference to the node where we'll insert
    const parent = document.getElementById('dynamic');

    // 2. make our node a child of this node
    parent.appendChild(newParagraph);
}