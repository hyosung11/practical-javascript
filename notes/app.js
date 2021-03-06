// VERSION 1 - ARRAYS

// 1. It should have a place to store todos
// var todos = ['item1', 'item2', 'item3']

// 2. It should have a way to display todos
// console.log('My Todos: ', todos);

// 3. It should have a way to add new todos
// todos.push('item4', 'item5')
// console.log(todos);
// console.log(todos.length);

// 4. It should have a way to change a todo
// todos[0] = 'item1 updated';
// console.log(todos[0]);

// 5. It should have a way to delete a todo
// todos.splice(0, 1)
// console.log(todos);


// VERSION 2 - FUNCTIONS

// It should have a function to display todos.
// var todos = ['item1', 'item2', 'item3'];
//
// function displayToDos() {
//   console.log('My todos:', todos);
// }

// It should have a function to add todos.
// function addToDo(todo) {
//   todos.push(todo);
//   displayToDos();
// }

// It should have a function to change todos.
// function changeTodo(position, newValue) {
//   todos[position] = newValue;
//   displayToDos();
// }

// It should have a function to delete todos.
// function deleteTodo(position) {
//   todos.splice(position, 1)
// }

// addToDo('new todo')
// changeTodo(0, 'changed again')
// deleteTodo(3)
// displayToDos(todos)

// Observations- Scope of Variables
// If you're inside a function, you can look out and see data, but the opposite isn't true. If you're outside, you can't look in.

// var myName = 'Omi';
//
// function sayName() {
//   var secret = 'watchandcode';
//   console.log(myName);
// }
//
// sayName(); // 'Omi'
// console.log(secret); ReferenceError: secret is not defined

// Objects

// var myComputer = {
//   operatingSystem: 'mac',
//   screenSize: '27 inches',
//   purchaseYear: 2017
// }
//
// console.log(myComputer.purchaseYear);

// Objects and functions
var omi = {
  name: 'Omi',
  sayName: function() {
    console.log(this.name);
  }
}

omi.sayName()

// var todoList = {
//   todos: ['item1', 'item2', 'item3'],
//   displayTodos: function() {
//     console.log('My Todos', this.todos);
//   },
//   addToDo: function(todo) {
//     this.todos.push(todo);
//     this.displayTodos();
//   },
//   changeTodo: function(position, newValue) {
//     this.todos[position] = newValue;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   }
// };
//
// todoList.deleteTodo(1);

// Debugger
// function incrementNumber() {
//   debugger;
//   var currentNumber = 0;
//   for (var i = 0; i < 3; i++) {
//     currentNumber++;
//   }
// }
//
//
// incrementNumber()

// Version 4 - Booleans

// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     console.log('My Todos', this.todos);
//   },
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   },
//   toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   }
// };
//
// todoList.addTodo('boolean testing');
// todoList.toggleCompleted(0);

// var myHouse = {
//   color: 'blue'
// }
//
// var color = myHouse.color;
// color = 'red';
//
// console.log(myHouse);
