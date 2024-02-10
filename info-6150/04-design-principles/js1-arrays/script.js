function init() {
    const todos = [
        'get groceries',
        'go to the bank',
        'run for president',
        'do laundry',
    ];
    
    const todosTag = document.getElementById("todos");
    
    let i = 0;
    while (i < todos.length) {
        const newLi = document.createElement("li");
        const newText = document.createTextNode(todos[i]);
        newLi.appendChild(newText);
        todosTag.appendChild(newLi);
        i++;
    }
}
