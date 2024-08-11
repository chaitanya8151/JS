const todoList = [
    {
        name: 'make dinner',
        dueDate: '10/8/24'
    },
    {
        name: 'wash dishes',
        dueDate: '15-8-24'
    }
];
renderTodoList();
function renderTodoList() {
    let todoListHtml = ''
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name=todoObject.name;
        // const dueDate=todoObject.dueDate;
        const { name, dueDate } = todoObject
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
        " class="delete-todo-button" >Delete</button>
        `
            ;
        todoListHtml += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}



function addTodo() {
    const inputElem = document.querySelector('.js-name-input');
    const name = inputElem.value;

    const datinputElement = document.querySelector('.js-due-date-input');
    const dueDate = datinputElement.value;


    todoList.push({
        // name:name,
        // dueDate:dueDate,
        name,
        dueDate
    });
    renderTodoList();


    inputElem.value = '';

}





function handleCostKey(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}