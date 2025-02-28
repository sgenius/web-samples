function loadForIndex () {
    const data = []; 
    fetch("some api").then((data) => {
        data.json().then((json) => {
            // use json to fill in a table in index.html
            const listNode = document.getElementById("datalist");
            if (listNode) {
                // fill in the list
            }
        })
    });

}

body.onLoad = () => {
    // if this is index:
    loadForIndex();
}