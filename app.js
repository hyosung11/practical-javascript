// VERSION 1 - ARRAYS

// 1. It should have a place to store todos
var todos = ['item1', 'item2', 'item3']

// 2. It should have a way to display todos
console.log('My Todos: ', todos);

// 3. It should have a way to add new todos
todos.push('item4', 'item5')
console.log(todos);
console.log(todos.length);

// 4. It should have a way to change a todo
todos[0] = 'item1 updated';
console.log(todos[0]);

// 5. It should have a way to delete a todo
todos.splice(0, 1)
console.log(todos);
