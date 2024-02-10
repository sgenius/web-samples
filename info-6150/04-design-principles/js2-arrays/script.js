function init() {
    const todos = [
        'get groceries',
        'go to the bank',
        'run for president',
        'do laundry',
    ];
    
    const todosTag = document.querySelector("#todos");
    
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const todoHTML = `<li>${todo}</li>`; // a string template
        todosTag.insertAdjacentHTML("beforeend", todoHTML);
    }

    // or:
    // for (let todo of todos) {
    //     const todoHTML = `<li>${todo}</li>`;
    //     todosTag.insertAdjacentHTML("beforeend", todoHTML);
    // }

    // there are other ways to do this! Can you come up with another one?
}
