let command = prompt('How can I help you today?');
const todos = [];

while (command !== 'quit') {
    if (command === 'new') {
        let newTodo = prompt('Add a new todo:');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (command === 'list') {
        console.log('----------');
        for (i = 0; i < todos.length; i++) {
            console.log(`${i + 1}: ${todos[i]}`); // We don't want the first todo to have the number 0;
        }
        console.log('----------');
    } else if (command === 'delete') {
        // deletes the number of the todo, not the index of it
        let deleteTodo = parseInt(prompt('Which Todo would you like to delete'));
        if (!Number.isNaN(deleteTodo)) {
            let deleted = todos.splice((deleteTodo - 1), 1);
            console.log(`${(deleted)} has been deleted`);
        } else {
            console.log('Unknown Index');
        }

    }
    command = prompt('How can I help you today?');
}


console.log('You quit the app');